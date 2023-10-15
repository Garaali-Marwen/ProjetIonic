import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = ""
  public appPages = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Ingredients', url: '/ingredients-list', icon: 'list'},
    {title: 'Menu', url: '/items-list', icon: 'fast-food'}
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
