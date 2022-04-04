import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Personnes} from './personnes';
import { HttpClient } from '@angular/common/http';
import {Question} from './models/question';
import {map} from 'rxjs/operators';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-startgame',
  template: `
    <div class="container">
    <form [formGroup]="formulaire">
      <div class="ligne">
        <mat-form-field>
          <input matInput type="text" placeholder="Pseudo" formControlName="pseudo" required="required">
        </mat-form-field>
      </div>
      <div class="ligne">
        <mat-form-field>
          <input matInput type="text" placeholder="Email" formControlName="mail">
        </mat-form-field>
      </div>
      <div class="ligne">
        <mat-form-field>
          <input matInput type="number" placeholder="Age" formControlName="age">
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
  private url = 'https://equipe06.chez-wam.info:443/api/joueurs';
  personne!: Personnes;
  formulaire = new FormGroup({
    id: new FormControl(this.http.get(this.url,)),
    pseudo: new FormControl(''),
    mail: new FormControl(''),
    age: new FormControl(18),
    temps: new FormControl(0),
    score: new FormControl(0),
    avatarUrl: new FormControl(''),

  });
  constructor(private http: HttpClient) { }
  onSubmit() {
    console.info(this.formulaire.value);
    return this.http.post(this.url, this.formulaire);


  }
  ngOnInit(): void {
  }

}
