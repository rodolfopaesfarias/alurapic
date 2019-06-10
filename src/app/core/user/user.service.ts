import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import * as jwt_decode from 'jwt-decode';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService) {
        if (this.tokenService.hasToken()) {
            this.decodeAndNotify();
        }
    }

    setToken(token:string) {
        this.tokenService.setToken(token);
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }

}