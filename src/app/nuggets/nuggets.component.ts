import { Component, OnInit } from '@angular/core';

@Component({git
  selector: 'app-nuggets',
  template: `
      <mat-card [routerLink]="['/question/7']">
          <mat-card-header>
            <mat-card-title>Nuggets :</mat-card-title>
          </mat-card-header>
          <img mat-card-image src="assets/images/nuggets.png">
        </mat-card>
  `,
  styles: [

  ]
})
export class NuggetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
