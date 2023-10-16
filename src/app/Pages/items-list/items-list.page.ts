import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {CategoryService} from "../../Services/category.service";
import {ItemService} from "../../Services/item.service";
import {ItemIngredientService} from "../../Services/item-ingredient.service";
import {UserService} from "../../Services/user.service";

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.page.html',
    styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {
    @ViewChild(IonModal) modal: any;

    public categories: any[] = [];
    isToastOpen = false;

    userRole =""
    setOpen(isOpen: boolean) {
        this.isToastOpen = isOpen;
    }

    constructor(private categoryService: CategoryService,
                private itemService: ItemService,
                private itemIngredientService: ItemIngredientService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.getAllCategories();
        this.userRole = this.userService.getRole();
    }

    getAllCategories() {
        this.categoryService.getAllCategories().subscribe({
            next: response => this.categories = response,
            error: error => console.log(error)
        })
    }

    cancel() {
        this.modal.dismiss();
    }


    onConfirm(form: any) {
        this.itemService.addItem(form).subscribe({
            next: (response: any) => {

                const itemBlob = form.get('item')
                const reader = new FileReader();
                let item;
                if (itemBlob) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        if (typeof reader.result === "string") {
                            item = JSON.parse(reader.result);
                        }
                        for (let ingredient of item.ingredients) {
                            this.addItemIngredient({ingredient: ingredient, item: {id: response.id}})
                        }
                    };
                    reader.readAsText(itemBlob);
                }
                this.getAllCategories();
                this.setOpen(true)
            },
            error: error => console.log(error)
        })
        this.modal.dismiss();
    }

    close(event: any){
      this.modal.dismiss();
    }

    addItemIngredient(itemIngredient: any) {
        this.itemIngredientService.addItemIngredient(itemIngredient).subscribe({
            error: error => console.log(error)
        })
    }
}
