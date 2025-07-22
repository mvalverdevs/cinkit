import { NgModule } from '@angular/core';
import { ImagePickerComponent } from 'src/app/components/image-picker/image-picker.component';

@NgModule({
  imports: [
    ImagePickerComponent
  ],
  exports: [
    ImagePickerComponent
  ]
})
export class SharedComponentsModule { }
