import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { UsersComponent } from './main/users/users.component';
import { ZonesComponent } from './main/zones/zones.component';
import { ProductsComponent } from './main/products/products.component';
import { LoginComponent } from './main/login/login.component';
import { LateralMenuLayoutComponent } from './layouts/lateral-menu-layout/lateral-menu-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LateralMenuLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { 
        path: 'home',
        component: HomeComponent,
        data: { title: 'Inicio' }
      },
      { 
        path: 'users',
        component: UsersComponent,
        data: { title: 'Trabajadores' }
      },
      {
        path: 'zones',
        component: ZonesComponent,
        data: { title: 'Zonas' }
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: { title: 'Productos' }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
