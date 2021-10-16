import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SignInGuardGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private route: Router,
    private afAuth: AngularFireAuth
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuth = user ? true : false;
    if (isAuth) {
      this.route.navigate(['/notes']);
    } else {
      this.route.navigate(['/sing-in']);
      return false;
    }
    return isAuth;
  }
}
