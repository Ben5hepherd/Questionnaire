import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from './services/loading-spinner.service';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'questionnaire-app';

  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.setUserDetails();
  }
}