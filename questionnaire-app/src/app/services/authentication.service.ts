import { Injectable } from '@angular/core';
import UserViewModel from '../view_models/user-view-model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _isUserAdmin: boolean;
  get isUserAdmin(): boolean {
    return this._isUserAdmin;
  }

  private _currentUserEmail: string;
  get currentUserEmail(): string {
    return this._currentUserEmail;
  }

  private _currentUserId: number;
  get currentUserId(): number {
    return this._currentUserId;
  }
  
  constructor(private httpClient: HttpClient, private router: Router) { }

  registerUser(model) {
    return this.httpClient.post<number>(environment.url + '/api/user', model);
  }

  loginUser(model) {
    return this.httpClient.post<any>(environment.url + '/api/login', model).subscribe(result => {
      localStorage.setItem('bearer-token', result.token);
      this.setUserDetails();
      return this.router.navigateByUrl('/questionnaire-list');
    });
  }

  setUserDetails() {
    let bearerToken = localStorage.getItem('bearer-token');
    if(bearerToken) {
      this.httpClient.get<UserViewModel>(environment.url + '/api/user/loggedInUser').subscribe((res: UserViewModel) => {
        this._isUserAdmin = res.isAdmin;
        this._currentUserEmail = res.email;
        this._currentUserId = res.id;
      })
    }
  }

  logout() {
    localStorage.clear();
    this._isUserAdmin = null;
    this._currentUserEmail = null;
    this._currentUserId = null;
  }
}