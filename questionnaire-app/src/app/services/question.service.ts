import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class QuestionService {

  constructor(private httpClient: HttpClient) { }

  post(model) {
    return this.httpClient.post<number>('http://localhost:4400/api/question', model);
  }
}