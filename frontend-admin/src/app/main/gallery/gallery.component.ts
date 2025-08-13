import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { ImageLibraryComponent } from 'src/app/components/image-library/image-library.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [ImageLibraryComponent, SHARED_IMPORTS]
})
export class GalleryComponent  implements OnInit {
  constructor(
  ) { }

  ngOnInit() {}
}
