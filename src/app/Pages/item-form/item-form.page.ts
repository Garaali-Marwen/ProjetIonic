import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IngredientService} from "../../Services/ingredient.service";
import {CategoryService} from "../../Services/category.service";

@Component({
    selector: 'app-item-form',
    templateUrl: './item-form.page.html',
    styleUrls: ['./item-form.page.scss'],
})
export class ItemFormPage implements OnInit {
    @Output() confirmEvent = new EventEmitter<any>();
    public image: any = {
        file: new File([], ""),
        url: ""
    }
    public ingredientsList : any[] = [];
    public categoriesList: any[] = [];
    constructor(private ingredientService: IngredientService,
                private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.ingredientService.getAllIngredients().subscribe({
            next: response => this.ingredientsList = response,
            error: error => console.log(error)
        })
        this.categoryService.getAllCategories().subscribe({
            next: response => this.categoriesList = response,
            error: error => console.log(error)
        })
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
        const itemFormData = this.prepareFormData(form, this.image);
        this.confirmEvent.emit(itemFormData);
    }

    prepareFormData(formation: any, image: any): FormData {
        const formData = new FormData();
        formData.append(
            'item',
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
