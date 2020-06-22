import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ResponseViewModel from '../view_models/response-view-model';

@Injectable({
  providedIn: 'root'
})
export default class ResponseService {

  constructor(private httpClient: HttpClient) { }

  get(id: number) {
    return this.httpClient.get<ResponseViewModel>('http://localhost:4400/api/response/' + id);
  }

  getAll(questionnaireId: number) {
    return this.httpClient.get<ResponseViewModel[]>('http://localhost:4400/api/response/getResponsesByQuestionnaireId/' + questionnaireId);
  }

  post(model) {
    return this.httpClient.post<number>('http://localhost:4400/api/response', model);
  }
}