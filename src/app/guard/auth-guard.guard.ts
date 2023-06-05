import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private route: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.authService.getRoleData().admin ||
      this.authService.getRoleData().student
    ) {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }
}
