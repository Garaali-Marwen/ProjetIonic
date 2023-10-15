import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  currentDate;
  

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentDate = new Date();
  }
  
   goToHome(){
   this.router.navigate(['/home']);
  }
}
