import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated: boolean = false

  constructor() { }

  isAuthenticated(): boolean {
      return this._isAuthenticated
  }

  authenticate(email: string, password: string) {
      if(email == '' && password == '') {
          this._isAuthenticated = true
      }
  }
}
