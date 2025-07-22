import { Component, OnInit } from '@angular/core';
import { Product } from 'src/api/models';
import { SHARED_IMPORTS } from 'src/app/shared/shared-imports';

@Component({
  standalone: true,
  selector: 'app-product-retrieve',
  templateUrl: './product-retrieve.component.html',
  styleUrls: ['./product-retrieve.component.scss'],
  imports: [SHARED_IMPORTS],
})
export class ProductRetrieveComponent  implements OnInit {

  constructor(
    
  ) { }

  ngOnInit() {}

}
