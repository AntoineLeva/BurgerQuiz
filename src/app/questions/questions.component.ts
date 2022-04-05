import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../models/question';
import {QuestionsService} from '../services/questions.service';
import {logger} from 'codelyzer/util/logger';
import {ActivatedRoute, Router} from '@angular/router';
import {Reponse} from '../models/reponse';
import {ReponsesService} from '../services/reponses.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: Question = {} as Question;
  reponses: Reponse[] = [];
  loading = false;
  private goodPoint = 0;

  constructor(private router: Router, private questionsService: QuestionsService, private route: ActivatedRoute, private reponsesService: ReponsesService) { }

  ngOnInit(): void {
    this.loading = true;
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.questionsService.getQuestion(id).subscribe(question => {
      this.question = question;
      this.reponsesService.getReponses(id).subscribe(reponses => {
        this.reponses = reponses;
        this.loading = false;
      });
    });

  }

  isGoodAnswers(reponse: Reponse){
    if (reponse.bonne_reponse){
      this.goodPoint += 1;
    }
    console.log(this.goodPoint);
    let id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.questionsService.getQuestion(id + 1).subscribe(question => {
      this.question = question;
      this.reponsesService.getReponses(id + 1).subscribe(reponses => {
        this.reponses = reponses;
        this.loading = false;
        id++;
        this.router.navigate(['/question', id]);
      });
    });



  }
}
