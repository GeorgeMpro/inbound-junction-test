import {Injectable, OnDestroy} from '@angular/core';
import {fromEvent, Observable, Subject, Subscription} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MobileDisplayService implements OnDestroy {
    mobileWidth = 375;
    resizeObservable: Observable<Event>;
    resizeSubscription: Subscription;
    isMobileDisplay = new Subject<boolean>();
    currentWidth = new Subject<number>();

    /**
     * Returns boolean for the mobile display status
     */
    checkDisplayStatus() {
        return this.isMobileDisplay.asObservable();
    }

    currentScreenWidth() {
        return this.currentWidth.asObservable();
    }

    /**
     * subscribe to changes in the display width
     */
    constructor() {
        this.resizeObservable = fromEvent(window, 'resize');
        this.resizeSubscription = this.resizeObservable.subscribe(evt => {
            // @ts-ignore
            const displayWidth = evt.target.innerWidth;
            this.isMobileDisplay.next(displayWidth <= this.mobileWidth);
            this.currentWidth.next(displayWidth);
        });
    }

    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }
}
