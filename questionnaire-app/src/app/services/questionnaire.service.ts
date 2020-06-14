import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import QuestionnaireListViewModel from '../view_models/questionnaire-list-view-model';
import QuestionnaireViewModel from '../view_models/questionnaire-view-model';

@Injectable({
  providedIn: 'root'
})
export default class QuestionnaireService {

  constructor(private httpClient: HttpClient) { }

  get(id: number) {
    return this.httpClient.get<QuestionnaireViewModel>('http://localhost:4400/api/questionnaire/' + id);
  }

  getAll() {
    return this.httpClient.get<QuestionnaireListViewModel[]>('http://localhost:4400/api/questionnaire');
  }

  post(model) {
    return this.httpClient.post<number>('http://localhost:4400/api/questionnaire', model);
  }
}