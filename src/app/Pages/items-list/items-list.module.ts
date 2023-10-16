import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsListPageRoutingModule } from './items-list-routing.module';

import { ItemsListPage } from './items-list.page';
import {IngredientFormPageModule} from "../ingredient-form/ingredient-form.module";
import {HomePageModule} from "../../home/home.module";
import {ItemFormPageModule} from "../item-form/item-form.module";
import {FooterPageModule} from "../footer/footer.module";
import {SearchPageModule} from "../search/search.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ItemsListPageRoutingModule,
        IngredientFormPageModule,
        HomePageModule,
        ItemFormPageModule,
        FooterPageModule,
        SearchPageModule
    ],
  declarations: [ItemsListPage]
})
export class ItemsListPageModule {}
