import { Injectable } from '@angular/core';
import UserViewModel from '../view_models/user-view-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: UserViewModel;

  constructor(private httpClient: HttpClient) { }

  registerUser(model) {
    return this.httpClient.post<number>('http://localhost:4400/api/user', model).subscribe(result => {
      this.currentUser = new UserViewModel();
      this.currentUser.id = result;
      this.currentUser.name = model.Name;
      this.currentUser.email = model.Email;
    });
  }

  loginUser(model) {
    return this.httpClient.put<number>('http://localhost:4400/api/user', model).subscribe(result => {
      this.currentUser = new UserViewModel();
      this.currentUser.id = result;
      this.currentUser.name = model.Name;
      this.currentUser.email = model.Email;
    });
  }

  logout() {
    this.currentUser = null;
  }
}
