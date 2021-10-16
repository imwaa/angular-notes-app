import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userAvatar = '';
  constructor(public auth: AuthService, private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userAvatar = user.photoURL;
      }
    });
  }

  ngOnInit(): void {}
}
