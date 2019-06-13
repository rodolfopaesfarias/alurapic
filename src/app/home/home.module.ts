import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { VMessageModule } from '../shared/components/v-message/v-message.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class HomeModule {

}