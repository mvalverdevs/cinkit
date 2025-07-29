import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from 'src/app/shared/imports';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
