import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { Zone } from 'src/api/models/zone';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class ZonesComponent  implements OnInit {

  zones: Zone[] = [];

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
          this.zones = zones.results;
        }
      }
    )
  }

}
