import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {IngredientService} from "../../Services/ingredient.service";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.page.html',
  styleUrls: ['./ingredients-list.page.scss'],
})
export class IngredientsListPage implements OnInit {
  @ViewChild(IonModal) modal: any;
  public ingredients: any[] = [];
  isToastOpen = false;
  userRole = ""

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  constructor(private ingredientService: IngredientService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getAllIngredients();
    this.userRole = this.userService.getRole();

  }

  getAllIngredients() {
    this.ingredientService.getAllIngredients().subscribe({
      next: response => this.ingredients = response,
      error: error => console.log(error)
    })
  }

  cancel() {
    this.modal.dismiss();
  }

  onConfirm(form: any) {
    this.ingredientService.addIngredient(form).subscribe({
      next: response => {
        this.getAllIngredients();
        this.setOpen(true)
      },
      error: error => console.log(error)
    })
    this.modal.dismiss();
  }
}
