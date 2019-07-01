import { NgModule } from '@angular/core';
import { ImmediateClick } from './immediate-click.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ImmediateClick],
    exports: [ImmediateClick],
    imports: [CommonModule]
})
export class ImmediateClickModule {

}
