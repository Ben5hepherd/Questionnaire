import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  isSpinnerShowing: boolean = false;

  show() {
    this.isSpinnerShowing = true;
  }

  hide() {
    this.isSpinnerShowing = false;
  }
}