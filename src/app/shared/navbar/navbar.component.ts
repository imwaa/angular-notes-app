import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userAvatar: string;
  userName: string;
  constructor(public auth: AuthService, private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userAvatar = user.photoURL;
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit(): void {}

  errorHandler(event) {
    console.debug(event);
    event.target.src =
      'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default.png';
  }
}
