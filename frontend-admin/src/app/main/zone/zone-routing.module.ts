import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneListComponent } from './zone-list/zone-list.component';
import { ZoneFormComponent } from './zone-form/zone-form.component';


const routes: Routes = [
  {
    path: '',
    component: ZoneListComponent,
    data: { title: 'Zonas' }
  },
  {
    path: ':id/edit',
    component: ZoneFormComponent,
    data: { title: 'Zonas > Editar' }
  },
  {
    path: 'new',
    component: ZoneFormComponent,
    data: { title: 'Zonas > Nueva' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneRoutingModule {}
