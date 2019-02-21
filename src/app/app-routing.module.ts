import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TerminalComponent } from './terminal/terminal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'term', component: TerminalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
