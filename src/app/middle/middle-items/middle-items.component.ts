import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MobileDisplayService} from '../../mobile-display.service';

@Component({
    selector: 'app-middle-items',
    templateUrl: './middle-items.component.html',
    styleUrls: ['./middle-items.component.scss']
})
export class MiddleItemsComponent implements OnInit, OnDestroy {
    subHeading = 'Lorem ipsum dolor sit amet, consectetuer';
    middleContentSmall = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,';
    middleContentLarge = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh';

    middleItemsSmall = [];
    middleItemsLarge = [];
    isMobileSub: Subscription;
    // todo check before rendering
    isMobileDisplay = true;
    currentDisplaySub: Subscription;
    currentDisplay: number;

    constructor(private mobileDisplayService: MobileDisplayService) {
    }

    ngOnInit() {
        this.setupMiddleItems(5);
        this.isMobileSub = this.mobileDisplayService.checkDisplayStatus()
            .subscribe((response) => {
                    this.isMobileDisplay = response;
                }
            );
        this.currentDisplaySub = this.mobileDisplayService.currentScreenWidth()
            .subscribe((res) => {
                this.currentDisplay = res;
            });
    }


    private setupMiddleItems(numberOfItems: number) {
        for (let i = 0; i < numberOfItems; i++) {
            this.middleItemsLarge.push(this.middleContentLarge);
            this.middleItemsSmall.push(this.middleContentSmall);
        }
    }

    ngOnDestroy(): void {
        this.isMobileSub.unsubscribe();
        this.currentDisplaySub.unsubscribe();
    }
}

