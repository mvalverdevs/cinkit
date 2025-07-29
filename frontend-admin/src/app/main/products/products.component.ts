import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from 'src/app/shared/imports';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class ProductsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
