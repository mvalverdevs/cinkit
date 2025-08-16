import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { title: 'Productos' }
  },
  {
    path: 'list',
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
  },
  {
    path: 'categories',
    component: ProductCategoryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
