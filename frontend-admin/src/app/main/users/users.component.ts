import { Component, OnInit } from '@angular/core';
import { User } from 'src/api/models';
import { UserService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class UsersComponent  implements OnInit {

  users: User[] = []

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.userList().subscribe(
      {
        next: (users) => {
          this.users = users.results;
        }
      }
    )
  }

}
