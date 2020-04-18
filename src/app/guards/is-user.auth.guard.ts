import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsUserAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
    this.authService = authService;
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    const role = next.data.role;
    const user = this.authService.getRole();
    console.log(user.scopes.authority);
    if (this.authService.getToken() && user.scopes.authority === role) {
      return true;
    } else {
      this.authService.logout();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
