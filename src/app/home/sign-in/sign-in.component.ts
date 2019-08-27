import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

    fromUrl: any[];
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authSvc: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute
            .queryParams
            .subscribe(params => this.fromUrl = params['fromUrl']);
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
    }

    login() {

        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.authSvc.authenticate(username, password).subscribe(
            () => {
                if (this.fromUrl) {
                    console.log(this.fromUrl);
                    this.router.navigate(this.fromUrl);
                } else {
                    this.router.navigate(['user', username]);
                }
            },
            (error) => {
                console.log(error);
                this.loginForm.reset();
                alert("erro ao autenticar.")
                if (this.platformDetectorService.isPlatformBrowser()) {
                    this.userNameInput.nativeElement.focus();
                }
            }
        )


    }
}