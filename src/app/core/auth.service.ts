import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebaseAuth from 'firebase/auth';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { observable, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any = null;
  user: any = null;
  userData: any; // Save logged in user data

  constructor(
    public afAuth: AngularFireAuth,
    private route: Router,
    private ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((data) => (this.authState = data));

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null;
  }

  loginGoogle() {
    this.afAuth
      .signInWithPopup(new firebaseAuth.GoogleAuthProvider())
      .then((success) => {
        this.route.navigate(['/notes']);
      });
  }

  loginFacebook() {
    this.afAuth
      .signInWithPopup(new firebaseAuth.FacebookAuthProvider())
      .then((success) => {
        this.route.navigate(['/notes']);
      });
  }

  loginGithub() {
    this.afAuth
      .signInWithPopup(new firebaseAuth.GithubAuthProvider())
      .then((success) => {
        this.route.navigate(['/notes']);
      });
  }

  logout() {
    this.afAuth.signOut().then((success) => {
      localStorage.removeItem('user');
      this.route.navigate(['/sign-in']);
    });
  }
}
