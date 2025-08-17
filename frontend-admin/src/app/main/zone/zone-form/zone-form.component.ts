import { Component, OnInit, ViewChild } from '@angular/core';
import { ZoneService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { Zone } from 'src/api/models/zone';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageLibraryDialogComponent } from 'src/app/components/image-library-dialog/image-library-dialog.component';
import { Image } from 'src/api/models';

@Component({
  selector: 'app-zone-form',
  templateUrl: './zone-form.component.html',
  styleUrls: ['./zone-form.component.scss'],
  standalone: true,
  imports: [ImageLibraryDialogComponent, ...SHARED_IMPORTS],
})
export class ZoneFormComponent  implements OnInit {

  image?: Image;
  zoneName: string = '';

  @ViewChild(ImageLibraryDialogComponent) imageDialogCmp!: ImageLibraryDialogComponent;

  constructor(
    private _zoneService: ZoneService,
    private _router: Router,
  ) {
  }

  ngOnInit() {
  }

  onSubmit(){
    this._zoneService.zoneCreate$Json$Response(
      {
        body: {
          id: 0,
          name: this.zoneName!,
          image: this.image!.id,
          image_data: this.image!,
          is_deleted: false
        }
      }
    ).subscribe(
      {
        next: (response) => {
          this._router.navigate(['/zones']);
        }
      }
    )
  }

  openImageLibrary() {
    const ref = this.imageDialogCmp.open();
    ref.afterClosed().subscribe((image: Image) => {
        this.image = image;
    });
  }

}
