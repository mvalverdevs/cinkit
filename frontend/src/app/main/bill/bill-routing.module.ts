import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { ProductListComponent } from '../product/product-list/product-list.component';


const routes: Routes = [
  {
    path: '',
    component: BillListComponent,
  },
  {
    path: ':id/order/new',
    component: ProductListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule {}
