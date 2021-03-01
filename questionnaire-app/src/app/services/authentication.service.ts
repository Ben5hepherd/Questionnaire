import { Injectable } from '@angular/core';
import UserViewModel from '../view_models/user-view-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserAdmin: boolean;
  currentUserEmail: string;

  constructor(private httpClient: HttpClient, private router: Router) { }

  registerUser(model) {
    return this.httpClient.post<number>(environment.url + '/api/user', model);
  }

  loginUser(model) {
    return this.httpClient.post<any>(environment.url + '/api/login', model).subscribe(result => {
      localStorage.setItem('bearer-token', result.token);
      
      this.currentUserEmail = model.Email;
      this.isUserAdmin = result.isAdmin;

      return this.router.navigateByUrl('/questionnaire-list');
    });
  }

  setUserDetails() {
    let bearerToken = localStorage.getItem('bearer-token');
    if(bearerToken) {
      this.httpClient.get<UserViewModel>(environment.url + '/api/user/loggedInUser').subscribe((res: UserViewModel) => {
        this.isUserAdmin = res.isAdmin;
        this.currentUserEmail = res.email;
      })
    }
  }

  logout() {
    localStorage.clear();
    this.currentUserEmail = null;
    this.isUserAdmin = null;
  }
}