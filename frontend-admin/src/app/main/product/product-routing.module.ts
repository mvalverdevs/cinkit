import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { title: 'Productos' }
  },/*
  {
    path: ':id',
    component: ProductRetrieveComponent,
  },
  {
    path: ':id/edit',
    component: ProductRetrieveComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
