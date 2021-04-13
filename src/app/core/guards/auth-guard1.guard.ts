import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard1Guard implements CanActivate {
  constructor(
    private userService: UserService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('aaagya ')
      if(localStorage.getItem('userLoginDetails')) return true
      else{
        alert('Unauthorized access Redirect to Login Page');
        this.userService.logout()
      }
      return false;
  }
  
}
