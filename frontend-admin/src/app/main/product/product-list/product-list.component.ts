import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from 'src/app/shared/imports';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class ProductListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
