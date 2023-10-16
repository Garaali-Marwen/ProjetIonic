import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ClientService} from "../../Services/client.service";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.page.html',
  styleUrls: ['./details-user.page.scss'],
})
export class DetailsUserPage implements OnInit {
  @ViewChild('imageInput') imageInput: any;

  openImageInput() {
    this.imageInput.nativeElement.click();
  }

  isToastOpen = false;
  public image: any = {
    file: new File([], ""),
    url: 'https://th.bing.com/th/id/R.e5a4bbea4350246ba31b9a89909b1c07?rik=%2f0y5zPeNf3IdtQ&pid=ImgRaw&r=0'
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  public user = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: {
      imageBytes: ""
    },
    role:""
  };
  isEditing = false;

  constructor(private activatedRoute: ActivatedRoute,
              private clientService: ClientService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        let id = p.get('id');
        this.userService.getUserById(Number(id)).subscribe({
          next: (response: any) => {
            this.user = response;
            if (response.role === 'CLIENT') {
              this.clientService.getClientById(response.id).subscribe({
                next: (response: any) => {
                  this.user = response
                  this.image.url = response.image ? 'data:image/png;base64,' + response.image.imageBytes : 'https://th.bing.com/th/id/R.e5a4bbea4350246ba31b9a89909b1c07?rik=%2f0y5zPeNf3IdtQ&pid=ImgRaw&r=0'
                },
                error: error => console.log(error)
              })
            }
          }, error: error => console.log(error)
        })
      },
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onImageSelected(event: any) {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.image = {
        file: file,
        url: URL.createObjectURL(file)
      };
      this.updateClientImage({
        file: file,
        url: URL.createObjectURL(file)
      })
    }
  }

  updateClientImage(image: any) {
    const formData = this.prepareFormData(image);
    this.clientService.updateClientImage(formData).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  prepareFormData(image: any): FormData {
    const formData = new FormData();
    formData.append(
      'clientId',
      new Blob([JSON.stringify(this.userService.getUserId())], {type: 'application/json'})
    );
    formData.append(
      'image',
      image.file,
      image.file.name
    );
    return formData;
  }

  editeProfile() {
    this.clientService.updateClient(this.user).subscribe({
      next: response => {
        this.setOpen(true);
        this.toggleEdit();
      },
      error: error => console.log(error)
    })
  }
}
