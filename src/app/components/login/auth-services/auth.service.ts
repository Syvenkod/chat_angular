import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor() { }
  private isAuth = false;

  loginService(userLogin , userPass){
    if(userLogin === "admin" && userPass === "admin" ){
    this.isAuth = true;}
    else this.isAuth = false;
  }


  isLoggedIn(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 200);
    })
  }
}
