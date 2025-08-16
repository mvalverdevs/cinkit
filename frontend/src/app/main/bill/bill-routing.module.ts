import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { BillRetrieveComponent } from './bill-retrieve/bill-retrieve.component';


const routes: Routes = [
  {
    path: '',
    component: BillListComponent,
    data: { title: 'Cuentas' }
  },
  {
    path: ':id',
    component: BillRetrieveComponent,
    data: { title: 'Cuenta' }
  },
  {
    path: ':id/order',
    component: ProductListComponent,
    data: { title: 'Añadir productos' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule {}
