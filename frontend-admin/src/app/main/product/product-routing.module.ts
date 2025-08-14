import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { title: 'Productos' }
  },
  {
    path: ':id/edit',
    component: ProductFormComponent,
  },
  {
    path: 'new',
    component: ProductFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
