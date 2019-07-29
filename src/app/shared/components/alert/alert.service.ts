import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { Router, NavigationStart } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepShowingAfterRouteChange = false;

    constructor(route: Router) {
        route.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepShowingAfterRouteChange) {
                    this.keepShowingAfterRouteChange = false;
                } else {
                    this.clear();
                }
            }
        })
    }

    alert(alertType: AlertType, message: string, keepShowingAfterRouteChange: boolean) {
        this.keepShowingAfterRouteChange = keepShowingAfterRouteChange;
        this.alertSubject.next(new Alert(alertType, message));;
    }

    getAlert() {
        return this.alertSubject.asObservable();
    }

    success(message: string, keepShowingAfterRouteChange: boolean = false) {
        this.alert(AlertType.SUCCESS, message, keepShowingAfterRouteChange);
    }

    danger(message: string, keepShowingAfterRouteChange: boolean = false) {
        this.alert(AlertType.DANGER, message, keepShowingAfterRouteChange);
    }

    info(message: string, keepShowingAfterRouteChange: boolean = false) {
        this.alert(AlertType.INFO, message, keepShowingAfterRouteChange);
    }

    warning(message: string, keepShowingAfterRouteChange: boolean = false) {
        this.alert(AlertType.WARNING, message, keepShowingAfterRouteChange);
    }

    clear() {
        this.alertSubject.next(null);
    }

}