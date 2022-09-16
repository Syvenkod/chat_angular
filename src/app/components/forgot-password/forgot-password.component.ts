import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth-services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authService: AuthService) { }

  emailForm: FormGroup;

  ngOnInit(): void {
    this.emailForm= new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
}
