import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth-services/auth.service';
import { Router } from '@angular/router';
import { faFacebook, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})

export class EnterComponent implements OnInit {

  flag = true;
  loginForm: FormGroup;
  registrationForm: FormGroup;
  facebook = faFacebook;
  google = faGoogle;
  linkedin = faLinkedinIn;

  public userName:string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required),
    });

    this.registrationForm = new FormGroup({
      userlogin: new FormControl(null, Validators.required),
      userEmail: new FormControl(null,[Validators.required, Validators.email]),
      userPass: new FormControl(null, Validators.required),
    })
  }

  login(form){
    if (this.loginForm.valid){
    console.log(form.get("login").value, form.get("pass").value);
    this.authService.loginService(form.get("login").value, form.get("pass").value);
    this.userName = form.get("login").value
    this.router.navigateByUrl('/main')
  }
  }

  singUp(form){
    console.log(form.value);
    form.reset();
  }
}
