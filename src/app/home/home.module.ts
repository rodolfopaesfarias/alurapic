import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/v-message/v-message.module';

@NgModule({
    declarations: [SignInComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule
    ]
})
export class HomeModule {

}