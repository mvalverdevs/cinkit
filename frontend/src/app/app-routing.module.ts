import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from "./main/user/login/login.page";

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
    path: 'products',
    loadChildren: () => import('./main/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'bills',
    loadChildren: () => import('./main/bill/bill.module').then(m => m.BillModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./main/order/order.module').then(m => m.OrderModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
