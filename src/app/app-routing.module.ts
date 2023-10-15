import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'footer',
    loadChildren: () => import('./Pages/footer/footer.module').then(m => m.FooterPageModule)
  },
  {
    path: 'item-form',
    loadChildren: () => import('./Pages/item-form/item-form.module').then( m => m.ItemFormPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./Pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./Pages/landing/landing.module').then( m => m.LandingPageModule)
  },  {
    path: 'details-user',
    loadChildren: () => import('./Pages/details-user/details-user.module').then( m => m.DetailsUserPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
