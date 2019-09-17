import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    footerHeading = 'Lorem ipsum dolor sit';
    footerSubHeading = 'Lorem ipsum dolor sit amet';
    footerContent = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';
    copyrightText = 'Powered by: Companyname | Terms and Conditions';
    numberBullet = [];
    footerExpandableItems = [];
    footerContentLarge = 'Lorem ipsum dolor';

    constructor() {
    }

    ngOnInit() {
        this.setupNumberedBullets(5);
        this.setupExpandableContent(4);
    }

    private setupNumberedBullets(numberOfBullets: number) {
        for (let i = 1; i <= numberOfBullets; i++) {
            this.numberBullet.push(i);
        }
    }

    private setupExpandableContent(numberOfExpandableItems: number) {
        for (let i = 1; i <= numberOfExpandableItems; i++) {
            this.footerExpandableItems.push(this.footerContentLarge);
        }
    }
}
