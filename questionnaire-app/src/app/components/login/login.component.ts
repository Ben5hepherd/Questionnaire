import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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

  showRegisterAccount: boolean = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private authenticationService: AuthenticationService, private snackBar: MatSnackBar) { }

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

    this.authenticationService.registerUser(model).subscribe(result => {
      this.showRegisterAccount = false;
      this.openAccountRegisteredSnackBar();
    });
  }

  openAccountRegisteredSnackBar() {
    this.snackBar.open('Account successfully registered', 'Close', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}