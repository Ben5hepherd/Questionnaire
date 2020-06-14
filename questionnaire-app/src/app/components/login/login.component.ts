import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginEmail: string;
  loginPassword: string;

  registerName: string;
  registerEmail: string;
  registerPassword: string;
  registerPasswordConfirmation: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    let model = { Email: this.loginEmail, Password: this.loginPassword };
    this.authenticationService.loginUser(model);
  }

  register() {
    if (this.registerPassword !== this.registerPasswordConfirmation) {
      //throw error
    }
    let model = {
      Name: this.registerName,
      Email: this.registerEmail,
      Password: this.registerPassword
    }

    this.authenticationService.registerUser(model);
  }
}