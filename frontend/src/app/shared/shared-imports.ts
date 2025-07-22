import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../components/shared-components.module';

export const SHARED_IMPORTS = [
  CommonModule,
  IonicModule,
  ReactiveFormsModule,
  SharedComponentsModule
];

export { SharedComponentsModule };