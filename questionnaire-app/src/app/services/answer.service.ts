import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export default class AnswerService {

  constructor(private httpClient: HttpClient) { }

  put(model) {
    return this.httpClient.put(environment.url + '/api/answer', model);
  }
}
