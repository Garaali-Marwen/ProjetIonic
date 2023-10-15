import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./Services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public connected = false;
  public connectedUser : any;
  public appPages = [
    {title: 'Home', url: '/landing', icon: 'home'},
    {title: 'Ingredients', url: '/ingredients-list', icon: 'list'},
    {title: 'Menu', url: '/items-list', icon: 'fast-food'}
  ];

  constructor(private router: Router,
              private userService: UserService) {
  }


  isSignInOrSignUpRoute(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes('signin') || currentUrl.includes('signup') || currentUrl.includes('landing');
  }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.connected = true;
      this.userService.getUserById(this.userService.getUserId()).subscribe({
        next: response => this.connectedUser = response,
        error: error => console.log(error)
      })
    }
  }

  logOut() {
    this.userService.clear();
    setTimeout(() => {
      window.location.reload()
    }, 1)
  }
}
