import { NgModule } from '@angular/core';
import { ImagePickerComponent } from 'src/app/components/image-picker/image-picker.component';
import { GridListComponent } from './grid-list-image/grid-image-list.component';

@NgModule({
  imports: [
    ImagePickerComponent,
    GridListComponent
  ],
  exports: [
    ImagePickerComponent,
    GridListComponent
  ]
})
export class SharedComponentsModule { }
