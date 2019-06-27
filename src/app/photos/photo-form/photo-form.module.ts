import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/v-message/v-message.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class PhotoFormModule  { }