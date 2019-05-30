import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-v-message',
    templateUrl: './v-message.component.html'
})
export class VMessageComponent {

    @Input() text = '';

}