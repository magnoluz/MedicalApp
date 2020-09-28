import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from '../app/api.service';

@Directive({ selector: '[showIfLogged]' })
export class ShowIfLoggedDirective implements OnInit, OnDestroy {
    subscription: Subscription;

    @Input() inverterLogica = false;

    constructor(private el: ElementRef,
                private renderer: Renderer2,
                private apiService: ApiService) { }

    ngOnInit(): void {
        const valorDisplay = this.el
            .nativeElement
            .style
            .display;

        this.subscription = this.apiService
            .getSituacaoLoginAccount()
            .subscribe(a => {
                if (this.inverterLogica) {
                    a = !a;
                }

                this.renderer.setStyle(this.el.nativeElement,
                                       'display',
                                       a ? valorDisplay : 'none');
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}