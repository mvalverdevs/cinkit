import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
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
        loadChildren: () => import('./main/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'zones',
        loadChildren: () => import('./main/zone/zone.module').then(m => m.ZoneModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./main/product/product.module').then(m => m.ProductModule)
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
