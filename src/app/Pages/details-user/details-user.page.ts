import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.page.html',
  styleUrls: ['./details-user.page.scss'],
})
export class DetailsUserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    firstname: 'aaaa',
    lastname: 'aaaaa',
    email: 'monemail@example.com',
    phone: '12345678',
    profileImage: '../../../assets/R.png'
  };

  isEditing = false;
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  editProfileImage(){}

}
