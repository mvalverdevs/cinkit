import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ImagePickerComponent } from './image-picker.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [
    ImagePickerComponent
  ],
  exports: [
    ImagePickerComponent
  ]
})
export class ImagePickerModule {}