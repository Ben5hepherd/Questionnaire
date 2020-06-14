import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  navigateToHome() {
    return this.router.navigateByUrl('/questionnaire-list');
  }

  navigateToLogin() {
    return this.router.navigateByUrl('');
  }
}