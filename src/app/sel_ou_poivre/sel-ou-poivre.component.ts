import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sel-ou-poivre',
  template: `
    <mat-card [routerLink]="['/question/7']">
      <mat-card-header>
        <mat-card-title>Sel ou Poivre :</mat-card-title>
      </mat-card-header>
      <img src="assets/images/sel_ou_poivre.jpg" width="1000"/>
    </mat-card>
  `,

  styles: [
    'img{height: 78vh;  display: flex; flex-direction: column; align-items: center; justify-content: center; background-size: cover; font-size: 30rem; }'
  ]
})
export class SelOuPoivreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
