import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { ResponseComponent } from './components/response/response.component';
import { QuestionnaireListComponent } from './components/questionnaire-list/questionnaire-list.component';
import { LoginComponent } from './components/login/login.component';
import { ResponseListComponent } from './components/response-list/response-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'questionnaire-list', component: QuestionnaireListComponent },
  { path: 'questionnaire/:id', component: QuestionnaireComponent },
  { path: 'response/:id', component: ResponseComponent },
  { path: 'response-list/:id', component: ResponseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
