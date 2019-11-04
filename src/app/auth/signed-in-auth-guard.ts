import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignedInAuthGuard implements CanActivate {

  constructor( private auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    
    if (this.auth.isSignedIn()) {
        this.router.navigate(['/chat']);
        return false;
    } else {
        return true;
    }

  }

}