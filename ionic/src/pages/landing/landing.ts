import { Component, Renderer, NgZone } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { TasksPage } from '../tasks/tasks';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public dataStore: DataStore
  ) {}

  hubcards: {
    title: string;
    desc: string;
    navigatePage: string;
    icon: string;
  }[] = [
    {
      title: 'Tasklist',
      desc: 'Get your everyday tasks here',
      navigatePage: 'tasks',
      icon: 'icon.png'
    }
  ];

  // use it for navigation in hub pages
  navigateFromHubCard(page) {
    this.navCtrl.push(TasksPage, {});
  }

  username = (this.dataStore as any).username || 'USER';
}
