import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    RouterModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductRetrieveComponent,
    ProductFormComponent,
    ProductListComponent
  ]
})
export class ProductModule {}
