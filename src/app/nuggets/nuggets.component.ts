import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuggets',
  template: `

      <mat-card [routerLink]="['/sel_ou_poivre']">
          <mat-card-header>
            <mat-card-title>Nuggets :</mat-card-title>
          </mat-card-header>
          <img mat-card-image src="assets/images/nuggets.png">
        </mat-card>

  `,
  styles: [
    'img{height: 80vh;  display: flex; flex-direction: column; align-items: center; justify-content: center; background-size: cover; font-size: 30rem; }'
  ]
})
export class NuggetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
