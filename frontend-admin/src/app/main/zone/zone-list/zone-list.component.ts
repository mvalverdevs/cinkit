import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ZoneService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { Zone } from 'src/api/models/zone';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ImageLibraryDialogComponent } from 'src/app/components/image-library-dialog/image-library-dialog.component';
import { Image } from 'src/api/models';

@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.scss'],
  standalone: true,
  imports: [ImageLibraryDialogComponent, ...SHARED_IMPORTS],
})
export class ZoneListComponent  implements OnInit {

  dataSource = new MatTableDataSource<Zone>();
  displayedColumns: string[] = ['image', 'name', 'actions'];
  editZone?: Zone;
  @ViewChild(ImageLibraryDialogComponent) imageDialogCmp!: ImageLibraryDialogComponent;

  constructor(
    private _zoneService: ZoneService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getZones();
  }

  getZones(){
    this._zoneService.zoneList().subscribe(
      {
        next: (zones) => {
          this.dataSource.data = zones.results;
        }
      }
    )
  }

  onEditZone(zone: Zone) {
    this.editZone = zone;
  }

  deleteZone(zone: Zone) {
    this._zoneService.zoneSetDeletedDestroy(
      {
        id: zone.id
      }
    ).subscribe(
      {
        next: (response) => {
          this.getZones();
        }
      }
    )
  }

  onSaveEditZone(zone: Zone) {
    this._zoneService.zonePartialUpdate$Json$Response({
      id: zone.id,
      body: zone
    }).subscribe(
      {
        next: (zone) => {
          this.editZone = undefined;
        }
      }
    )
  }

  openImageLibrary() {
    const ref = this.imageDialogCmp.open();
    ref.afterClosed().subscribe((image: Image) => {
      this.editZone!.image = image.id;
      this._zoneService.zoneUpdate$Json$Response(
        {
          id: this.editZone!.id,
          body: this.editZone!
        }
      ).subscribe(
        {
          next: (response) => {
            this.editZone!.image_data = image;
            this.editZone = undefined;
          }
        }
      )
    });
  }

}
