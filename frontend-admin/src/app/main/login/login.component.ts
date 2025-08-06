import { Component, OnInit } from '@angular/core';
import { User } from 'src/api/models';
import { UserService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class LoginComponent  implements OnInit {

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {}

}
