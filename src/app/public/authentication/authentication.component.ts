import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/core/constants/login-reponse';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  isLogin: boolean = true;
  loginForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(4),Validators.pattern('(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$')]),
  });
  signUpForm: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(4)]),
    password: new FormControl('', [Validators.required,Validators.maxLength(15), Validators.minLength(8),Validators.pattern('(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$')]),
    DOB: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private _toastService: ToastService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {

  }


  get f() { return this.loginForm.controls; }
  get s() { return this.signUpForm.controls; }

  onLoginClick() {
    this.isLogin = true;
  }

  onSignUpClick() {
    this.isLogin = false;
  }

  submitForm() {
    if (this.isLogin) {

      console.log(this.loginForm.valid);
      

      localStorage.clear();
      let username = this.loginForm.value.username;
      let password = this.loginForm.value.password;
      this._toastService.successMessage('Done')
      this.authenticationService.signInUser(username,password).subscribe(res => {
        
        if (res === LoginResponse.USER_LOGGED_IN_SUCCESS) {
          this.router.navigate(['/profile']);
        }
       
      })

    } else {

      let username = this.loginForm.value.username;
      let password = this.loginForm.value.password;
      let dob = this.loginForm.value.dob;

      this.authenticationService.signUpUser(username,password,dob).subscribe(res => {
        if (res === LoginResponse.USER_CREATED) {
          this.router.navigate(['/profile']);
        }
      })
      localStorage.setItem('username',username);
    }
  }

}
