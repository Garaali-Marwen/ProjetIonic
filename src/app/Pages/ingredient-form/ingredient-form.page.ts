import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.page.html',
  styleUrls: ['./ingredient-form.page.scss'],
})
export class IngredientFormPage implements OnInit {
  @Output() confirmEvent = new EventEmitter<any>();
  public image: any = {
    file: new File([], ""),
    url: ""
  }
  constructor() {
  }

  ngOnInit() {
  }

  handleImageChange(event: any) {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.image = {
        file: file,
        url: URL.createObjectURL(file)
      };
    } else {
      this.image = {
        file: new File([], ""),
        url: ''
      };
    }
  }

  confirm(form: any) {
    const ingredientFormData = this.prepareFormData(form, this.image);
    this.confirmEvent.emit(ingredientFormData);
  }


  prepareFormData(formation: any, image: any): FormData {
    const formData = new FormData();
    formData.append(
        'ingredient',
        new Blob([JSON.stringify(formation)], {type: 'application/json'})
    );
    formData.append(
        'image',
        image.file,
        image.file.name
    );
    return formData;
  }
}
