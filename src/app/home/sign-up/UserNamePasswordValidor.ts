import { ValidatorFn, FormGroup } from '@angular/forms';

export const UserNamePasswordValidator: ValidatorFn = (form: FormGroup) => {
    const userName = form.get('userName').value;
    const password = form.get('password').value;

    if (userName.trim() + password.trim()) {
        return userName == password 
                ? { UserNamePasswordValidator: true }
                : null;
    } else {
        return null;
    }
}