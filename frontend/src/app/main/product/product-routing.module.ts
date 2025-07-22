import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
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
    path: ':id',
    component: ProductRetrieveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
