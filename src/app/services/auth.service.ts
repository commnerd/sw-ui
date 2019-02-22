import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated: boolean = false

  constructor() { }

  isAuthenticated(): boolean {
      return this._isAuthenticated || !environment.production
  }

  authenticate(email: string, password: string) {
      if(email == '' && password == '') {
          this._isAuthenticated = true
      }
  }
}
