import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { Zone } from 'src/api/models/zone';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class ZonesComponent  implements OnInit {

  dataSource = new MatTableDataSource<Zone>();
  displayedColumns: string[] = ['image', 'name', 'actions'];

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
          console.log(zones.results)
          this.dataSource.data = zones.results;
        }
      }
    )
  }

}
