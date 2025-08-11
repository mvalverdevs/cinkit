import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserLogin } from 'src/api/models';
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

  loginForm: FormGroup

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.loginForm = this._formBuilder.group({
      dni: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  async onSubmit(userLogin: UserLogin){
this._userService.userLoginCreate$Json$Response({body: userLogin}).subscribe({
      next: (response) => {
      },
      error: (e) => {
      },
      complete: () => {
        this._router.navigate(['/home']);
      }
    });
  }

}
