import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../Services/client.service";
import {Router} from "@angular/router";

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
  constructor(private clientService: ClientService,
              private route: Router) { }

  ngOnInit() {
  }
  changeType(){
    this.type = !this.type;
 }

  signUp(value: any) {
    this.clientService.signUp(value).subscribe({
      next: response => this.route.navigateByUrl("/signin"),
      error: error => console.log(error)
    })
  }
}
