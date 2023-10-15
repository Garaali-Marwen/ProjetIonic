import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  s={
    email: "",
    password: "",
    first: "",
    last: "",
    phone:"",
   };
   type: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  changeType(){
    this.type = !this.type;
 }

}
