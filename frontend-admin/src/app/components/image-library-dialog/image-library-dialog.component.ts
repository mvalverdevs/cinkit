import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ImageLibraryComponent } from '../image-library/image-library.component';
import { Image } from 'src/api/models';

@Component({
  selector: 'app-image-library-dialog',
  templateUrl: './image-library-dialog.component.html',
  styleUrls: ['./image-library-dialog.component.scss'],
  standalone: true,
  imports: [ImageLibraryComponent, ...SHARED_IMPORTS]
})
export class ImageLibraryDialogComponent implements OnInit {

  @ViewChild('imageDialog') imageDialog!: TemplateRef<any>;
  private dialog = inject(MatDialog);

  selectedImage?: Image;

  constructor(
  ) { }

  ngOnInit() {
  }

  open(data?: any): MatDialogRef<Image> {
    if (!this.imageDialog) {
      // Por si el padre intenta abrir antes de que el hijo renderice
      throw new Error('imageDialog TemplateRef todavía no está disponible');
    }
  
    return this.dialog.open(this.imageDialog, {
      data: {image: this.selectedImage},
      // si quieres aplicar estilos al contenedor del diálogo:
      panelClass: 'image-dialog', // -> en lugar de poner class en <ng-template>
      width: '80%',
      maxWidth: '95vw',
      height: '90%',
      autoFocus: false,
      restoreFocus: false,
      // disableClose: true,
    });
  }

  selectImage(image: Image) {
    this.selectedImage = image;
  }

}
