import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { MainNavComponent } from './shared/main-nav/main-nav.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
