import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TerminalComponent } from './terminal/terminal.component';
import { LoginComponent } from './login/login.component';

import { UnAuthGuard } from './middlewares/unauth.guard'
import { AuthGuard } from './middlewares/auth.guard'

const routes: Routes = [
	{path: '', component: LoginComponent, canActivate:[UnAuthGuard]},
	{path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
	{path: 'term', component: TerminalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
