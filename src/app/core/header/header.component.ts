import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user: User;
    user$: Observable<User>;

    constructor(userService: UserService) {
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }

}