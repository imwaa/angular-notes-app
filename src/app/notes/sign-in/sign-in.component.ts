import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private afAuth: AngularFireAuth,
    private routes: Router
  ) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.routes.navigate(['/notes']);
      } else {
      }
    });
  }

  ngOnInit(): void {}
}
