import { Component, OnInit } from '@angular/core';
import { BillService, ZoneService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';
import { Bill, Zone } from 'src/api/models';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  imports: [SHARED_IMPORTS],
})
export class OrderListComponent implements OnInit {

  zones: Zone[] = [];
  bills: Bill[] = [];
  selectedZoneId?: number;

  constructor(
    private _zoneService: ZoneService,
    private _billService: BillService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this._zoneService.zoneList().subscribe(
      {
        next: (zones) => {
          this.zones = zones.results;
        }
      }
    )

    this._billService.billList({zone_id: this.selectedZoneId}).subscribe(
      {
        next: (bills) => {
          this.bills = bills.results;
        }
      }
    )
  }

  getBills(){
    this._billService.billList({
      zone_id: this.selectedZoneId
    }).subscribe(
      {
        next: (bills) => {
          this.bills = bills.results;
        }
      }
    )
  }

  selectZone(zone_id: number){
    if (this.selectedZoneId == zone_id){
      this.selectedZoneId = undefined;
    } else {
      this.selectedZoneId = zone_id;
    }
    this.getBills();
  }

  createBill(){
    this._billService.billCreate$Json$Response(
      {
        body: {
          id: -1,
          created_at: '',
          zone: this.selectedZoneId,
        }
      }
    ).subscribe(
      {
        next: (bill) => {
          this._router.navigate(['/products/']);
        }
      }
    )
  }

}
