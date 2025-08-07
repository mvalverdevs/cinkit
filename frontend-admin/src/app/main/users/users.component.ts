import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
export class UsersComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['first_name', 'last_name', 'phone', 'actions'];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.userList().subscribe({
      next: (response) => {
        this.dataSource.data = response.results;
      }
    });
  }
}
