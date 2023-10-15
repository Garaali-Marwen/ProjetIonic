import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    {title: 'Home', url: '/landing', icon: 'home'},
    {title: 'Sign-up', url: '/signup', icon: 'log-in-outline'},
    {title: 'Sign-in', url: '/signin', icon: 'person-add-outline'},
    {title: 'Ingredients', url: '/ingredients-list', icon: 'list'},
    {title: 'Menu', url: '/items-list', icon: 'fast-food'}
  ];

  constructor(private router: Router) {
  }


  isSignInOrSignUpRoute(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('signin') || currentUrl.includes('signup') || currentUrl.includes('landing');
  }

  ngOnInit(): void {
  }
}
