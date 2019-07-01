import { Directive, OnInit, ElementRef } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
    selector: '[apImmediateClick]'
})
export class ImmediateClick implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platformDetectorService: PlatformDetectorService
     ) {}

     ngOnInit(): void {
        this.platformDetectorService.isPlatformBrowser && this.element.nativeElement.click();
    }


}