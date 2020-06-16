import { Injectable } from '@angular/core';
import UserViewModel from '../view_models/user-view-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: UserViewModel;
  public bearerToken: string;

  constructor(private httpClient: HttpClient) { }

  registerUser(model) {
    return this.httpClient.post<number>('http://localhost:4400/api/user', model);
  }

  loginUser(model) {
    return this.httpClient.post<any>('http://localhost:4400/api/login', model).subscribe(result => {
      this.bearerToken = result.token;
      this.currentUser = new UserViewModel();
      this.currentUser.name = model.Name;
      this.currentUser.email = model.Email;
    });
  }

  logout() {
    this.currentUser = null;
  }
}