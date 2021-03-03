import { Component, OnInit } from '@angular/core';
import QuestionnaireService from '../../services/questionnaire.service';
import QuestionnaireListViewModel from '../../view_models/questionnaire-list-view-model';
import { Router } from '@angular/router';
import ResponseService from '../../services/response.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import QuestionnaireViewModel from 'src/app/view_models/questionnaire-view-model';
import { MatTableDataSource } from '../../../../node_modules/@angular/material/table';
import { AddQuestionnaireDialogComponent, AddQuestionnaireModel } from '../add-questionnaire-dialog/add-questionnaire-dialog.component';
import { MatDialog } from '../../../../node_modules/@angular/material/dialog';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  dataSource = new MatTableDataSource<QuestionnaireListViewModel>();
  displayedColumns: string[] = ['id', 'name', 'createdDate', 'viewButton', 'responseButton', 'responseListButton'];

  constructor(
    private questionnaireService: QuestionnaireService,
    private responseService: ResponseService,
    private authenticationService: AuthenticationService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.questionnaireService.getAll().subscribe(questionnairesReturned => {
      let questionnairesList = Array<QuestionnaireListViewModel>();
      questionnairesReturned.forEach(q => {
        let questionnaireToAdd = new QuestionnaireListViewModel();
        questionnaireToAdd.id = q.id;
        questionnaireToAdd.name = q.name;
        questionnaireToAdd.createdDate = new Date(q.createdDate);

        questionnairesList.push(questionnaireToAdd);
      })
      this.dataSource = new MatTableDataSource(questionnairesList);
    });
  }

  openAddQuestionnaireDialog() {
    const dialogRef = this.dialog.open(AddQuestionnaireDialogComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe((result: AddQuestionnaireModel) => {
      if (result) {
        this.addQuestionnaire(result.name);
      }
    });
  }

  addQuestionnaire(name: string) {
    var model = {
      CreatedByUserId: 1,
      Name: name
    };

    let questionnaireToAddToList = new QuestionnaireListViewModel();
    questionnaireToAddToList.createdDate = new Date();
    questionnaireToAddToList.name = model.Name;

    this.questionnaireService.post(model).subscribe(result => {
      questionnaireToAddToList.id = result;
      this.dataSource.data.push(questionnaireToAddToList);
      this.dataSource._updateChangeSubscription();
    });

  }

  viewQuestionnaire(questionnaireId: number) {
    return this.router.navigateByUrl('/questionnaire/' + questionnaireId);
  }

  addResponse(questionnaireId: number) {
    var model = { QuestionnaireId: questionnaireId };
    this.responseService.post(model).subscribe(responseId => this.viewResponse(responseId));
  }

  viewResponse(responseId: number) {
    return this.router.navigateByUrl('/response/' + responseId);
  }

  viewResponses(questionnaireId: number) {
    return this.router.navigateByUrl('/response-list/' + questionnaireId);
  }
}