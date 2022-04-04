import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {QuestionsComponent} from "./questions/questions.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import { FormulaireqrComponent } from './formulaireqr.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'question/:id', component:QuestionsComponent},
  {path: 'questionQR', component:FormulaireqrComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
