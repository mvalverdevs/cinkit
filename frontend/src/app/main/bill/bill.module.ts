import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BillRoutingModule } from './bill-routing.module';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    BillRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
  ]
})
export class BillModule {}
