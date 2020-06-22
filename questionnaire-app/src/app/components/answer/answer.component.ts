import { Component, Input } from '@angular/core';
import AnswerViewModel from 'src/app/view_models/answer-view-model';
import AnswerService from 'src/app/services/answer.service';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {

  @Input() answer: AnswerViewModel;

  constructor(private answerService: AnswerService) { }

  updateAnswer() {
    let model = { AnswerId: this.answer.id, UpdatedText: this.answer.text };
    this.answerService.put(model).subscribe(result => result);
  }
}
