import { Component, OnInit, ViewChild } from '@angular/core';
import { ZoneService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { Zone } from 'src/api/models/zone';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  zoneForm: FormGroup
  zoneId?: number
  imageUrl?: string

  @ViewChild(ImageLibraryDialogComponent) imageDialogCmp!: ImageLibraryDialogComponent;

  constructor(
    private _zoneService: ZoneService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
  ) {
    this.zoneForm = this._formBuilder.group({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.zoneId = params['id'];
        this.getZone(this.zoneId!);
      }
    });
  }

  getZone(id: number){
    this._zoneService.zoneRetrieve$Response({id: id}).subscribe(
      {
        next: (response) => {
          this.zoneForm.setValue(
            {
              name: response.body.name,
              image: response.body.image,
            }
          )
          this.imageUrl = response.body.image_data.image!
        }
      }
    )
  }

  onSubmit(zone: Zone){
    if (this.zoneId){
      this._zoneService.zonePartialUpdate$Json$Response({id: this.zoneId, body: zone})
    } else {

    }
  }

  openImageLibrary() {
      const ref = this.imageDialogCmp.open();
      ref.afterClosed().subscribe((image: Image) => {
        
      });
    }

}
