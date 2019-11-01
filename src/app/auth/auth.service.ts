import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth, private firestore: AngularFirestore, private router:Router ) {

    this.user = this.firebaseAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.doc<any>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )

  }

  doLogin() {
    //this.firebaseAuth
  }

  signOut() {
    this.firebaseAuth.auth.signOut().then(() => {
        this.router.navigate(['/login']);
    });
  }

}
