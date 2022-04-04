import {Component, Input, OnInit} from '@angular/core';
import { from } from 'rxjs';
import {Reponse} from "../models/reponse";

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.css']
})
export class ReponsesComponent implements OnInit {
  @Input() reponse: Reponse = <Reponse>{};
  
  constructor() {}

  ngOnInit(): void {
  }

  recupGoodAnswers(): void{
    console.log(this.reponse.bonne_reponse);
  }


}
