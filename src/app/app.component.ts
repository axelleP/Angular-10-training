import { Component } from '@angular/core';

//initialisation
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    /* déclaration des variables */
    isAuth = false;
    allAppareilsStatus = '';
    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(//ajout du temps avant d'afficher la date
            () => {
                resolve(date);
            }, 2000
        );
    });
    appareils = [
        {
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            name: 'Frigo',
            status: 'allumé'
        },
        {
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

    constructor() {
        setTimeout(//ajout du temps de changer la valeur de la var isAuth
            () => {
                this.isAuth = true;
            }, 4000
        );
    }

    changeAppareilsStatus(status: string) {
        for (var appareil of this.appareils) {
            appareil.status = status;
        }
        
        this.allAppareilsStatus = status;
        
        this.lastUpdate = new Promise((resolve, reject) => {
            const date = new Date();
            resolve(date);
        });
    }

}
