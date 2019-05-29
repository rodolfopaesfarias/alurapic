import { Directive, Renderer, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() private brightness = '70%';

    constructor(
        private renderer: Renderer,
        private el: ElementRef) { }

    @HostListener('mouseover')    
    darkenOn() {        
        this.renderer.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {        
        this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}