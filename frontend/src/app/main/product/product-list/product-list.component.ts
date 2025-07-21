import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('AQUI')
  }

}
