import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./Services/user.service";
import {IonModal} from "@ionic/angular";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public profileUrl = "";
  public connected = false;
  public connectedUser: any;
  userRole = ""

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
      this.profileUrl = "/details-user/" + this.userService.getUserId();
    }
    this.userRole = this.userService.getRole()
  }

  logOut() {
    this.userService.clear();
    setTimeout(() => {
      window.location.reload()
    }, 1)
  }
}
