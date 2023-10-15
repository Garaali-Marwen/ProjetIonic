import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../../Services/user.service";
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  constructor(private router: Router,
              private userService: UserService) {
  }


  ngOnInit() {
  }


  goToSignup() {
    this.router.navigate(['/signup']);
  }

  logIn(value: any) {
    this.userService.signIn(value).subscribe({
      next: (response: any) => {
        var decoded = jwt_decode(response.token) as any;
        this.userService.setUserId(decoded.id);
        this.userService.setRole(decoded.role);
        this.userService.setUserEmail(decoded.sub);
        this.router.navigateByUrl('/');
        setTimeout(()=>{
          window.location.reload()
        }, 1)
      },
      error: error => console.log(error)
    });
  }
}
