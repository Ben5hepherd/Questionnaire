import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private httpClient: HttpClient) { }

  post(model) {
    return this.httpClient.post<number>('http://localhost:4400/api/response', model);
  }
}
