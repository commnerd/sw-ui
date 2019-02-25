import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { MainNavComponent } from './partials/main-nav/main-nav.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TerminalComponent } from './terminal/terminal.component'
import { MainComponent } from './layouts/main/main.component'
import { LoginComponent } from './login/login.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TerminalComponent,
    MainNavComponent,
    MainComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
