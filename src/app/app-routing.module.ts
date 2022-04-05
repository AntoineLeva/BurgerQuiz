import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {QuestionsComponent} from './questions/questions.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NuggetsComponent} from './nuggets/nuggets.component';
import {SelOuPoivreComponent} from './sel_ou_poivre/sel-ou-poivre.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'question/:id', component: QuestionsComponent},
  {path: 'nuggets', component: NuggetsComponent},
  {path: 'sel_ou_poivre', component: SelOuPoivreComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
