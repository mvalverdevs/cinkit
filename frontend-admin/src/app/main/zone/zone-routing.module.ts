import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneListComponent } from './zone-list/zone-list.component';


const routes: Routes = [
  {
    path: '',
    component: ZoneListComponent,
    data: { title: 'Zonas' }
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
export class ZoneRoutingModule {}
