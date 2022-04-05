import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import { Questionwithoutid } from './models/Questionwithoutid';
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
            Bonne Réponse :
            <input matInput type="text" placeholder="reponse 1" formControlName="reponse_1">
          </mat-form-field>
          <br>
          <mat-form-field>
          Mauvaises Réponses :
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
          <br>
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

  questionAdd!:Questionwithoutid;
  static  id: number=1000;
  formulaire = new FormGroup({
    question: new FormControl(''),
    categorie: new FormControl('')
  });
  constructor(private http:HttpClient){
      
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({'accept': 'application/json', 'Content-Type': 'application/json', 'Prefer': 'return=representation'})
    };
    //https://equipe06.chez-wam.info/api/questions
    //console.info(this.formulaire.value);
   this.questionAdd = {libelle: this.formulaire.get('question')!.value,  id_catetgorie: 2, id_theme: 3, explicit: false ,fun_fact: '' };
   console.info(this.questionAdd);
   this.http.post<any>('https://equipe06.chez-wam.info:443/api/questions', this.questionAdd, httpOptions).subscribe(rep =>console.log(rep));
  }

  requetageId(){


  }
}