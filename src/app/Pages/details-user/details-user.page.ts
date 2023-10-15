import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.page.html',
  styleUrls: ['./details-user.page.scss'],
})
export class DetailsUserPage implements OnInit {

  @ViewChild('imageInput') imageInput: any; 
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

  openImageInput() {
    this.imageInput.nativeElement.click(); 
  }
  
  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedImage = inputElement.files[0];
      this.user.profileImage = URL.createObjectURL(selectedImage ); 
    }
  }

}
