import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import { Question } from './models/question';
import { Reponse } from './models/reponse';


@Component({
  selector: 'app-intro-formulaire',
  template: `
    <div class="container">
      <form [formGroup]="formulaire">
        <div class="ligne">
          <mat-form-field>
            <input matInput type="text" placeholder="question" formControlName="question">
          </mat-form-field>
          <mat-form-field>
          <input matInput type="number" placeholder="categorie" formControlName="categorie">
        </mat-form-field>
          <br>
          <mat-form-field>
            <input matInput type="text" placeholder="reponse 1" formControlName="reponse_1">
          </mat-form-field>
          <br>
          <mat-form-field>
            <input matInput type="text" placeholder="reponse 2" formControlName="reponse_2">
          </mat-form-field>    
          <br>     
          <mat-form-field>
            <input matInput type="text" placeholder="reponse 3" formControlName="reponse_3">
          </mat-form-field>          
          <br>
          <mat-form-field>
              <input matInput type="text" placeholder="reponse 4" formControlName="reponse_4">
          </mat-form-field>
        </div>
      </form>
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
export class FormulaireqrComponent implements OnInit {

  QuestionAdd!:Question[];
  ReponseAdd!:Reponse;

  formulaire = new FormGroup({
    question: new FormControl(''),
    categorie: new FormControl(''),
    reponse_1: new FormControl(''),
    reponse_2: new FormControl(''),
    reponse_3: new FormControl(''),
    reponse_4: new FormControl('')
  });
  constructor() {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    
    //console.info(this.formulaire.value);
    this.QuestionAdd[0].libelle=this.formulaire.get('question')!.value;
   console.info(this.QuestionAdd[0].libelle);  
   this.QuestionAdd[0].id_categorie=this.formulaire.get('categorie')!.value;;

  }

  requetageId(){


  }
}