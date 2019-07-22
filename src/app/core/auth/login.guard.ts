import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

    constructor(private userService: UserService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if (this.userService.isLogged()) {
            this.router.navigate(['user', this.userService.getUserName()]);
            return false;
        }

        return true;
    }

}