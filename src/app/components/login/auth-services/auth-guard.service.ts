import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivateChild, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate() {
      return this.authService.isLoggedIn()
      .then((isAuth)=>{
        return isAuth ? true : false
      });
  }

}
