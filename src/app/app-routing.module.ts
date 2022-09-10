import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterComponent } from './components/enter/enter.component';
import { AuthGuardService } from './components/enter/auth-services/auth-guard.service';
import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', component: EnterComponent, pathMatch: "full"},
  {path: 'main', component: MainComponent, canActivate: [AuthGuardService]},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
