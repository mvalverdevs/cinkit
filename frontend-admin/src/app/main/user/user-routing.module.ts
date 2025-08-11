import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: { title: 'Trabajadores' }
  },
  {
    path: ':id/edit',
    component: UserFormComponent,
    data: { title: 'Trabajadores > Editar' }
  },
  {
    path: 'new',
    component: UserFormComponent,
    data: { title: 'Trabajadores > Nuevo' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
