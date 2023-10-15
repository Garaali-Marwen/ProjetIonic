import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleItemPageRoutingModule } from './single-item-routing.module';

import { SingleItemPage } from './single-item.page';
import {IngredientsListPageModule} from "../ingredients-list/ingredients-list.module";
import {FooterPageModule} from "../footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SingleItemPageRoutingModule,
        IngredientsListPageModule,
        FooterPageModule
    ],
  declarations: [SingleItemPage]
})
export class SingleItemPageModule {}
