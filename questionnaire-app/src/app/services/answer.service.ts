import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class AnswerService {

  constructor(private httpClient: HttpClient) { }

  put(model) {
    return this.httpClient.put('http://localhost:4400/api/answer', model);
  }
}
