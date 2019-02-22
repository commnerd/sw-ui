import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this._authService.isAuthenticated()) {
            return true;
        }
        this._router.navigate(['/'], { queryParams: { return: state.url } })
        return false
    }
}
