import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCategoryFormComponent } from './product-category-form/product-category-form.component';


const routes: Routes = [
  {
    path: '',
    component: ProductCategoryListComponent,
    data: { title: 'Productos > Categorías' }
  },
  {
    path: ':id/edit',
    component: ProductCategoryFormComponent,
    data: { title: 'Productos > Categorías > Editar' }
  },
  {
    path: 'new',
    component: ProductCategoryFormComponent,
    data: { title: 'Productos > Categorías > Nueva' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryRoutingModule {}
