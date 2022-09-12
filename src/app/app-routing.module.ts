import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterComponent } from './components/enter/enter.component';
import { AuthGuardService } from './components/shared/auth-services/auth-guard.service';
import { Page404Component } from './components/page404/page404.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  {path: '', component: EnterComponent, pathMatch: "full"},
  {path: 'enter', component: EnterComponent},
  {path: 'main', loadChildren: () => import ('./components/main/main.module').then(main => main.MainModule), canActivate: [AuthGuardService]},
  {path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
