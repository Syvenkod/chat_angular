import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth-services/auth.service';
import { Router } from '@angular/router';
import { faFacebook, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})

export class EnterComponent implements OnInit {

  flag = false;
  loginForm: FormGroup;
  registrationForm: FormGroup;
  facebook = faFacebook;
  google = faGoogle;
  linkedin = faLinkedinIn;

  public userName:string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, Validators.required),
    });

    this.registrationForm = new FormGroup({
      userEmail: new FormControl(null,[Validators.required, Validators.email]),
      userPass: new FormControl(null, Validators.required),
    })
  }
}