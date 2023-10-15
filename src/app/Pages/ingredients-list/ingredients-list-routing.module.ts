import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientsListPage } from './ingredients-list.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsListPageRoutingModule {}
