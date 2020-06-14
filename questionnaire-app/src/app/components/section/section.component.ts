import { Component, OnInit, Input } from '@angular/core';
import QuestionViewModel from 'src/app/view_models/question-view-model';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() name: string;
  @Input() questions: QuestionViewModel[];
  orderedQuestions: QuestionViewModel[];

  constructor() { }

  ngOnInit() {
    if (this.questions && this.questions.length > 1) {
      this.orderedQuestions = this.questions.sort((a, b) => {
        return a.ordinal - b.ordinal;
      });
    } else {
      this.orderedQuestions = this.questions;
    }
  }

}