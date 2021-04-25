import { Component, Input } from '@angular/core';
import AnswerViewModel from 'src/app/view_models/answer-view-model';
import AnswerService from 'src/app/services/answer.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material/snack-bar';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {

  @Input() answer: AnswerViewModel;

  constructor(private answerService: AnswerService, private snackBar: MatSnackBar) { }

  updateAnswer() {
    let model = { AnswerId: this.answer.id, UpdatedText: this.answer.text };
    this.answerService.put(model).subscribe(result => {
      this.snackBar.open("Answer Updated", "",
      {
        duration: 2000,
        panelClass: "success-snack-bar"
      });
    }, error => {
      this.snackBar.open("Answer Failed to Update", "",
      {
        duration: 2000,
        panelClass: "error-snack-bar"
      });
    });
  }
}
