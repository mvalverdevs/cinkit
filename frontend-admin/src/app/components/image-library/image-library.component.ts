import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Image } from 'src/api/models';
import { ImageLibraryService } from 'src/api/services';

@Component({
  standalone: true,
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class ImageLibraryComponent  implements OnInit {

  images?: Image[];

  constructor(
    private _imageService: ImageLibraryService
  ) {}

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getImages();
  }


  getImages(){
    this._imageService.imageLibraryList().subscribe(
      {
        next: (images) => {
          this.images = images.results;
          console.log(this.images);
        }
      }
    )
  }

}
