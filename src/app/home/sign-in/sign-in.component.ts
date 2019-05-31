import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authSvc: AuthService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {

        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        console.log(username);
        console.log(password);

        this.authSvc.authenticate(username, password).subscribe(
            () => console.log("autenticou"),
            (error) => {
                console.log(error);
                this.loginForm.reset();
                alert("erro ao autenticar.")
            }
        )


    }
}