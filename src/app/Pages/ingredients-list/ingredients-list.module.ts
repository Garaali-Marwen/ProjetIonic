import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientsListPageRoutingModule } from './ingredients-list-routing.module';

import { IngredientsListPage } from './ingredients-list.page';
import {IngredientComponent} from "../../Components/ingredient/ingredient.component";
import {IngredientFormPageModule} from "../ingredient-form/ingredient-form.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IngredientsListPageRoutingModule,
        IngredientFormPageModule,
        FooterPageModule
    ],
  exports: [
    IngredientComponent
  ],
  declarations: [IngredientsListPage, IngredientComponent]
})
export class IngredientsListPageModule {}
