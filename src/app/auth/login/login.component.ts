import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../models/User';
import {TokenStorageService} from '../../services/token-storage.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';
  public user: User;
  private retUrl: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const params$ = this.route.queryParams
      .subscribe(data => this.retUrl = data.retUrl);
    this.createLoginForm();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser().user;
      this.router.navigate(['search'], { queryParams: { search: '' }});
    }
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  login() {
    const rawValue = this.loginForm.getRawValue();
    this.authService.login({...rawValue})
      .subscribe(data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        sessionStorage.setItem('reload', JSON.stringify(true));
        this.router.navigate([`/${this.retUrl}`]/*, {queryParams: { search: ''}}*/);
      }, err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      });
  }

}
