import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth-services/auth.service';
import { faFacebook, faGoogle, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


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
  gitHub = faGithub;
  hide = true;

  constructor(public authService: AuthService,) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required),
    });

    this.registrationForm = new FormGroup({
      userEmail: new FormControl('',[Validators.required, Validators.email]),
      userPass: new FormControl('', Validators.required),
    })

  }
}