import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'Add Product', url: '/item-form', icon: 'add-circle-outline' }
  ];
  constructor() {}
}
