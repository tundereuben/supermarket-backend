import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public isSuccessful = false;
  public isSignUpFailed = false;
  public isLoggedIn = false;
  public errorMessage = '';
  public user: User;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  }

  register() {
    const rawValue = this.registerForm.getRawValue();
    this.authService.register({...rawValue})
      .subscribe(data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isSignUpFailed = false;
        this.isLoggedIn = true;
        this.user = data;
        this.router.navigate(['/checkout']);
      }, err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      });
  }

}
