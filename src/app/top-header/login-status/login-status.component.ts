import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  public isLoggedIn = false;
  public user: User;
  public loggedInUser: any;

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
  ) {
    if (this.tokenStorage.getToken()) {
      this.loggedInUser = this.tokenStorage.getUser().user;
    }
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser().user;
    }
  }

  logout() {
    this.tokenStorage.logOut();
    window.location.reload();
    this.router.navigate(['']);
  }

}
