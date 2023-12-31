import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'footer',
    loadChildren: () => import('./Pages/footer/footer.module').then(m => m.FooterPageModule)
  },
  {
    path: 'item-form',
    loadChildren: () => import('./Pages/item-form/item-form.module').then(m => m.ItemFormPageModule)
  },
  {
    path: 'ingredient-form',
    loadChildren: () => import('./Pages/ingredient-form/ingredient-form.module').then(m => m.IngredientFormPageModule)
  },
  {
    path: 'ingredients-list',
    loadChildren: () => import('./Pages/ingredients-list/ingredients-list.module').then(m => m.IngredientsListPageModule)
  },
  {
    path: 'items-list',
    loadChildren: () => import('./Pages/items-list/items-list.module').then(m => m.ItemsListPageModule)
  },
  {
    path: 'single-item/:id',
    loadChildren: () => import('./Pages/single-item/single-item.module').then(m => m.SingleItemPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./Pages/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'details-user/:id',
    loadChildren: () => import('./Pages/details-user/details-user.module').then(m => m.DetailsUserPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./Pages/search/search.module').then( m => m.SearchPageModule)
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
