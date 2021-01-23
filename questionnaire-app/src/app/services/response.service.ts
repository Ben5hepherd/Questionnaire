import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ResponseViewModel from '../view_models/response-view-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class ResponseService {

  constructor(private httpClient: HttpClient) { }

  get(id: number) {
    return this.httpClient.get<ResponseViewModel>(environment.url + '/api/response/' + id);
  }

  getAll(questionnaireId: number) {
    return this.httpClient.get<ResponseViewModel[]>(environment.url + '/api/response/getResponsesByQuestionnaireId/' + questionnaireId);
  }

  post(model) {
    return this.httpClient.post<number>(environment.url + '/api/response', model);
  }
}