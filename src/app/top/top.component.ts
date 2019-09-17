import {Component, OnDestroy, OnInit} from '@angular/core';
import {MobileDisplayService} from '../mobile-display.service';
import {subscribeOn} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {
    companyName = 'Company Name';
    title = 'CryptoWorld';
    topText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  ';
    emptyBullets = [];
    isMobileSub: Subscription;
    isMobileDisplay: boolean;

    constructor(private mobileDisplayService: MobileDisplayService) {
    }

    ngOnInit() {
        this.setupEmptyBullets(5);
        this.isMobileSub = this.mobileDisplayService.checkDisplayStatus()
            .subscribe((response) => {
                    this.isMobileDisplay = response;
                }
            );
    }

    ngOnDestroy(): void {
        this.isMobileSub.unsubscribe();
    }

    private setupEmptyBullets(numberOfBullets: number) {
        for (let i = 0; i < numberOfBullets; i++) {
            this.emptyBullets.push(i);
        }
    }
}
