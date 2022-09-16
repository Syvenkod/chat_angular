import { Injectable, NgZone } from '@angular/core';
import { User } from '../user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  userData: any;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) =>{
      if (user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['main']);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationMail();
        result.user.updateProfile({
          displayName: email,
          photoURL:"../assets/images/noImg.svg",
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((user: any) => {user.sendEmailVerification()}
      )
      .then(() => {
        this.router.navigate([' '])
      });
  }

  forgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get isLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && (user.emailVerified !== false ||
    (user.providerData[0].providerId === 'google.com' ||
    user.providerData[0].providerId === 'facebook.com' ||
    user.providerData[0].providerId === 'github.com'))
    ? true : false;
  }

  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  facebookAuth() {
    return this.authLogin(new auth.FacebookAuthProvider());
  }

  gitHubAuth() {
    return this.authLogin(new auth.GithubAuthProvider());
  }

  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.setUserData(result.user);
        this.router.navigate(['main']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.id}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  getErrorMessage(email: any) {
    if (email.hasError('required')) {
      return 'You must enter a value';
    }
    return email.hasError('email') ? 'Not a valid email' : '';
  }

}
