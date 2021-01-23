import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import QuestionnaireListViewModel from '../view_models/questionnaire-list-view-model';
import QuestionnaireViewModel from '../view_models/questionnaire-view-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class QuestionnaireService {

  constructor(private httpClient: HttpClient) { }

  get(id: number) {
    return this.httpClient.get<QuestionnaireViewModel>(environment.url + '/api/questionnaire/' + id);
  }

  getAll() {
    return this.httpClient.get<QuestionnaireListViewModel[]>(environment.url + '/api/questionnaire');
  }

  post(model) {
    return this.httpClient.post<number>(environment.url + '/api/questionnaire', model);
  }
}