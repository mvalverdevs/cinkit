import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
  },/*
  {
    path: 'list',
    component: ProductListComponent,
  },
  {
    path: ':id/edit',
    component: ProductFormComponent,
  },
  {
    path: 'new',
    component: ProductFormComponent,
  },
  {
    path: 'categories',
    component: ProductCategoryListComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
