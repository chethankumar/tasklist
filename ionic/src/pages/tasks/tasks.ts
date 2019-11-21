import { Component, Renderer, NgZone, NgModule } from '@angular/core';
import {
  NavController,
  ModalController,
  LoadingController
} from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { LiveUpdateProvider } from '../../providers/live-update/live-update';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
@NgModule({
  providers: [LiveUpdateProvider]
})
export class TasksPage {
  constructor(
    public navCtrl: NavController,
    public dataStore: DataStore,
    public liveUpdateService: LiveUpdateProvider
  ) {
    this.callMicroservice();
  }

  tasks = [];

  callMicroservice() {
    var self = this;
    var resourceRequest = new WLResourceRequest(
      'http://localhost:3000/tasks',
      WLResourceRequest.GET,
      { useAPIProxy: false }
    );
    resourceRequest.send().then(
      function(response) {
        // alert('Success: ' + response.responseText);
        self.tasks = JSON.parse(response.responseText);
      },
      function(response) {
        alert('Failure: ' + JSON.stringify(response));
      }
    );
  }
}
