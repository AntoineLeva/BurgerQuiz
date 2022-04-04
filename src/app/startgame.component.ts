import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-startgame',
  template: `
    <div class="container">
    <form [formGroup]="formulaire">
      <div class="ligne">
        <mat-form-field>
          <input matInput type="text" placeholder="Pseudo" formControlName="Pseudo">
        </mat-form-field>
      </div>
      <div class="ligne">
        <mat-form-field>
          <input matInput type="text" placeholder="Email" formControlName="Mail">
        </mat-form-field>
      </div>
      <div class="ligne">
        <mat-form-field>
          <input matInput type="number" placeholder="Age" formControlName="Age">
        </mat-form-field>
      </div>
      <div class="ligne">
        <mat-form-field>
          <input matInput type="text" placeholder="URL de L'avatar" formControlName="avatarUrl">
        </mat-form-field>
      </div>
    </form>
    <div>
      valeurs : {{formulaire?.value | json}}
    </div>
  </div>
  <form [formGroup]="formulaire" (ngSubmit)="onSubmit()">
    <!-- -->
    <div class="ligne">
      <button mat-raised-button color="primary" type="submit">Valider</button>
    </div>
  </form>
  `,
  styles: [
    `.container {height: 80vh; width: 600px; display: flex; flex-direction: column; justify-content: center; margin: 0 auto;}`
  ]
})
export class StartgameComponent implements OnInit {

  formulaire = new FormGroup({
    id: new FormControl(),
    Pseudo: new FormControl(''),
    Mail: new FormControl(''),
    Age: new FormControl(18),

    temps: new FormControl(0),
    score: new FormControl(0),
    avatarUrl: new FormControl(''),

  });
  constructor() { }
  onSubmit() {
    console.info(this.formulaire.value);
  }
  ngOnInit(): void {
  }

}
