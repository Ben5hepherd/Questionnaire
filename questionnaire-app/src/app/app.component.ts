import { Component } from '@angular/core';
import { LoadingSpinnerService } from './services/loading-spinner.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'questionnaire-app';

  constructor(private loadingSpinnerService: LoadingSpinnerService) { }
}