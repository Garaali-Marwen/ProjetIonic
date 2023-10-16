import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterPageModule} from "./Pages/footer/footer.module";
import {HttpClientModule} from "@angular/common/http";
import {ItemFormPageModule} from "./Pages/item-form/item-form.module";

@NgModule({
  declarations: [AppComponent],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FooterPageModule, HttpClientModule, ItemFormPageModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
