import { NgModule } from '@angular/core';
import { ImagePickerComponent } from 'src/app/components/image-picker/image-picker.component';
import { GridListComponent } from './grid-image-list/grid-image-list.component';
import { HorizontalListComponent } from './horizontal-image-list/horizontal-image-list.component';

@NgModule({
  imports: [
    ImagePickerComponent,
    GridListComponent,
    HorizontalListComponent
  ],
  exports: [
    ImagePickerComponent,
    GridListComponent,
    HorizontalListComponent
  ]
})
export class SharedComponentsModule { }
