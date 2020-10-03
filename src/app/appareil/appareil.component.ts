import { Component, Input, OnInit } from '@angular/core';

//initialisation
@Component({
    selector: 'appareil',
    templateUrl: './appareil.component.html',
    styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {
    @Input() appareilName: string;
    @Input() appareilStatus: string;

    constructor() {}

    ngOnInit(): void {}

    getColor() {
        if (this.appareilStatus === 'allumé') {
            return 'green';
        } else if (this.appareilStatus === 'éteint') {
            return 'red';
        }
    }
}
