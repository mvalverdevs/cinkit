import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/api/models';
import { UserService } from 'src/api/services';
import { SHARED_IMPORTS } from 'src/app/shared/imports';
import { RoleEnum } from 'src/api/models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: true,
  imports: [...SHARED_IMPORTS],
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup
  userId?: number
  roleSelector = [
    { 
      text: 'Superadmin',
      value: RoleEnum.Superadmin,
    },
    { text: 'Trabajador',
      value: RoleEnum.User, 
    }
  ]

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.userForm = this._formBuilder.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      is_active: new FormControl(true, Validators.required),
      role: new FormControl(true, Validators.required),
    });
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      // 🚩 Edit Mode and take the recipe from api
      if (params['id'] != undefined){
        this.userId = params['id'];
        this.getUser(this.userId!);
      }
    });
  }

  getUser(id: number) {
    this._userService.userRetrieve$Response({id: id}).subscribe(
      {
        next: (response) => {
          this.userForm.setValue({
            first_name: response.body.first_name,
            last_name: response.body.last_name,
            phone: response.body.phone,
            dni: response.body.dni,
            is_active: response.body.is_active,
            role: response.body.role
          }
          );
        }
      }
    )
  }

  onSubmit(user: User){
    if (this.userId) {
      this._userService.userPartialUpdate$Json$Response({id: this.userId!, body: user}).subscribe(
        {
          next: (response) => {
            this._router.navigate(['/users']);
          }
        }
      )
    } else {
      // Set default password
      user.password = '1234';
      this._userService.userCreate$Json$Response({body: user}).subscribe(
        {
          next: (response) => {
            this._router.navigate(['/users']);
          }
        }
      )
    }
    
  }
}
