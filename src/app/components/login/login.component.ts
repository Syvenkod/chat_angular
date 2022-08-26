import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth-services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public userName:string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userLogin: new FormControl(null, Validators.required),
      userPass: new FormControl(null, Validators.required),
    });
  }

  login(){
    console.log(this.loginForm.get("userLogin").value, this.loginForm.get("userPass").value);
    this.authService.loginService(this.loginForm.get("userLogin").value, this.loginForm.get("userPass").value);
    this.userName = this.loginForm.get("userLogin").value
    console.log(this.userName);
    this.router.navigateByUrl('/main')
  }


}
