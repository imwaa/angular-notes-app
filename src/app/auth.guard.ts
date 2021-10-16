import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth.service';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public isUserAuth: Subscription;
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
    if (!isAuth) {
      this.route.navigate(['/sign-in']);
    }
    return isAuth;

    // if (this.auth.isLoggedIn !== true) {
    //   this.route.navigate(['/notes']);
    //   return false;
    // } else {
    //   return true;
    // }
  }
}
