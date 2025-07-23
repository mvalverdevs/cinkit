import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from "./main/user/login/login.page";
import { RegisterPage } from "./main/user/register/register.page";
import { ProfilePage } from './main/user/profile/profile.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'products',
    loadChildren: () => import('./main/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./main/order/order.module').then(m => m.OrderModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
