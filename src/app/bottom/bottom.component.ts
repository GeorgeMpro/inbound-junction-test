import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-bottom',
    templateUrl: './bottom.component.html',
    styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {
    bottomHeading = 'Lorem ipsum dolor sit';
    combinedTextSmall = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat';
    combinedTextLarge = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut';
    combinedSecondText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore';

    combinedContentSmall = [];
    combinedContentLarge = [];

    constructor() {
    }

    ngOnInit() {
        this.setupCombinedItems(4);
    }

    private setupCombinedItems(numberOfItems: number) {
        for (let i = 0; i < numberOfItems; i++) {
            this.combinedContentSmall.push(this.combinedTextSmall);
            this.combinedContentLarge.push(this.combinedTextLarge);
        }
    }
}
