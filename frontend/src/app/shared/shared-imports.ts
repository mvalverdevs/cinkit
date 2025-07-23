import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../components/shared-components.module';

export const SHARED_IMPORTS = [
  CommonModule,
  IonicModule,
  ReactiveFormsModule,
  SharedComponentsModule,
  FormsModule
];

export { SharedComponentsModule };