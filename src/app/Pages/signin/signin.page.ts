import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  login={
    email: "",
    password: "",
   };
  type: boolean = true;
  constructor(private router: Router) { }


  ngOnInit() {
  }


  changeType(){
    this.type = !this.type;
 }

 

 goToHome(){
  
 }
 goToSignup(){
  this.router.navigate(['/signup']);
 }
}
