import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import QuestionnaireService from 'src/app/services/questionnaire.service';
import QuestionService from 'src/app/services/question.service';
import QuestionnaireViewModel from 'src/app/view_models/questionnaire-view-model';
import QuestionViewModel from 'src/app/view_models/question-view-model';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionDialogComponent } from '../add-question-dialog/add-question-dialog.component';
import { AddSectionDialogComponent } from '../add-section-dialog/add-section-dialog.component';
import SectionViewModel from 'src/app/view_models/section-view-model';
import { SectionService } from 'src/app/services/section.service';
import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material/snack-bar';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  name: string;
  orderedSections: SectionViewModel[];

  constructor(
    private route: ActivatedRoute,
    private questionnaireService: QuestionnaireService,
    private questionService: QuestionService,
    private sectionService: SectionService,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.questionnaireService.get(this.id).subscribe(result => {
      this.name = result.name;
      this.orderedSections = result.sections.sort((a, b) => {
        return a.ordinal - b.ordinal;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  openAddSectionDialog() {
    const dialogRef = this.dialog.open(AddSectionDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addSection(result.name);
      }
    });
  }

  openAddQuestionDialog() {
    const dialogRef = this.dialog.open(AddQuestionDialogComponent, {
      width: '250px',
      data: { sections: this.orderedSections }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addQuestion(result.text, result.sectionId);
      }
    });
  }

  addQuestion(text: string, sectionId: number) {
    let model = {
      Text: text,
      Ordinal: this.orderedSections.find(s => s.id === sectionId).questions.length,
      QuestionnaireId: this.id,
      SectionId: sectionId
    };

    let questionToAddToList = new QuestionViewModel();
    questionToAddToList.text = model.Text;
    questionToAddToList.ordinal = model.Ordinal;

    this.questionService.post(model).subscribe(result => {
      questionToAddToList.id = result;
      this.snackBar.open("Question Added", "",
      {
        duration: 2000,
        panelClass: "success-snack-bar"
      });
    }, error => {
      this.snackBar.open("Question Failed to Add", "",
      {
        duration: 2000,
        panelClass: "error-snack-bar"
      });
    });

    this.orderedSections.find(s => s.id === sectionId).questions.push(questionToAddToList);
  }

  addSection(name: string) {
    let model = {
      Name: name,
      Ordinal: this.orderedSections.length,
      QuestionnaireId: this.id,
    };

    let sectionToAddToList = new SectionViewModel();
    sectionToAddToList.name = model.Name;
    sectionToAddToList.ordinal = model.Ordinal;
    sectionToAddToList.questions = [];

    this.sectionService.post(model).subscribe(result => {
      sectionToAddToList.id = result;
      this.snackBar.open("Section Added", "",
      {
        duration: 2000,
        panelClass: "success-snack-bar"
      });
    }, error => {
      this.snackBar.open("Section Failed to Add", "",
      {
        duration: 2000,
        panelClass: "error-snack-bar"
      });
    });
    this.orderedSections.push(sectionToAddToList);
  }
}