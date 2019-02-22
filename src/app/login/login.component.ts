import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('')
  password = new FormControl('')

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  authenticate() {
      this._authService.authenticate(this.email.value, this.password.value)
      if(this._authService.isAuthenticated()) {
          this._router.navigate(['/dashboard'])
      }
  }

}
