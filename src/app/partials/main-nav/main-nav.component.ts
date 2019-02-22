import { AuthService } from '../../services/auth.service'
import { Component, OnInit } from '@angular/core'
import { Router, Routes } from '@angular/router'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  router: Router
  routes: Routes = []

  constructor(private _router: Router, private _authService: AuthService) {
      this.router = _router
  }

  ngOnInit() {
      for(let i = 1; i < this._router.config.length; i++) {
          let config = this._router.config[i];
          if(config.data != undefined && config.data.label != undefined) {
              this.routes.push(this._router.config[i])
          }
      }
  }

}
