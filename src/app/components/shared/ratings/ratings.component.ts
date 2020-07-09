import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ratings',
    templateUrl: './ratings.component.html',
    styleUrls: [ './ratings.component.scss' ]
})

export class RatingsComponent implements OnInit {
    constructor() { }

    @Input()
    ratesValue: number;

    get stars(): RatingStar[] {
        let result: RatingStar[] = [];

        for (let i = 0; i < 5; i++) {
            result.push({ marked: i < this.ratesValue })
        }

        return result;
    }

    ngOnInit() { }
}

class RatingStar {
    marked: boolean;
}