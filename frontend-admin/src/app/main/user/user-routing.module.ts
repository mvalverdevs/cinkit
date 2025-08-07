import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: { title: 'Trabajadores' }
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
export class UserRoutingModule {}
