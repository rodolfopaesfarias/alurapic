import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { VMessageModule } from '../shared/components/v-message/v-message.module';

@NgModule({
    declarations: [SignInComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        AppRoutingModule
    ]
})
export class HomeModule {

}