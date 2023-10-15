import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ItemComponent} from "../Components/item/item.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    exports: [
        ItemComponent
    ],
    declarations: [HomePage, ItemComponent]
})
export class HomePageModule {}
