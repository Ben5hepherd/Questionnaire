import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class QuestionService {

  constructor(private httpClient: HttpClient) { }

  post(model) {
    return this.httpClient.post<number>(environment.url + '/api/question', model);
  }
}