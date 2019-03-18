import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
    { path: '', component: DashboardComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
