import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['login'], {
        queryParams: { retUrl: route.url },
      });

      return false;
    }

    const user =  this.tokenService.getUser().user;
    if (route.data.role && route.data.role.indexOf(user.role) === -1) {
      this.router.navigate(['login'], {
        queryParams: { retUrl: route.url },
      });
      return false;
    }
    return true;
  }
}
