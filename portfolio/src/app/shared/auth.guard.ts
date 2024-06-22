import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivateChild(): boolean {
    const isLoggedIn = this.auth.IsLoggedIn();
    console.log('AuthGuard#canActivateChild called, isLoggedIn:', isLoggedIn);

    if (this.auth.IsLoggedIn()) {
      return true;
    }

    console.log('Redirecting to login-signup');
    alert('Kindly Login first!!');
    this.router.navigate(['./login-signup']);
    return false;
  }
}
