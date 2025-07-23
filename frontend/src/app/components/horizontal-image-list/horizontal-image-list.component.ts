import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-horizontal-image-list',
  templateUrl: './horizontal-image-list.component.html',
  styleUrls: ['./horizontal-image-list.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class HorizontalListComponent  implements OnInit {

  @Input() items: any[] = [];
  selectedItemId?: number;
  @Output() selectedItemChange: EventEmitter<number> = new EventEmitter<number>();
  constructor(
  ) {}

  ngOnInit() {
  }


  selectItem(item_id: number){
    if (this.selectedItemId == item_id){
      this.selectedItemId = undefined;
    } else {
      this.selectedItemId = item_id;
    }
    this.selectedItemChange.emit(this.selectedItemId);
  }

}
