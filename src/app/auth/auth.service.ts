import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>;
  userDetails: firebase.User = null;
  

  constructor(private firebaseAuth: AngularFireAuth, private router:Router ) {

    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );

  }

  isSignedIn() {
    return this.firebaseAuth.authState.pipe(first());
  }

  doSignIn(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    this.firebaseAuth.auth.signOut().then(() => {
        this.router.navigate(['/login']);
    });
  }

}
