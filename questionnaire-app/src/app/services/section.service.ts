import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private httpClient: HttpClient) { }

  post(model) {
    return this.httpClient.post<number>('http://localhost:4400/api/section', model);
  }
}
