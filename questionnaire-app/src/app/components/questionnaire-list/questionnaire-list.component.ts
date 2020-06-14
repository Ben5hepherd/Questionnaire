import { Component, OnInit } from '@angular/core';
import QuestionnaireService from '../../services/questionnaire.service';
import QuestionnaireListViewModel from '../../view_models/questionnaire-list-view-model';
import { Router } from '@angular/router';
import { ResponseService } from 'src/app/services/response.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  questionnairesList: QuestionnaireListViewModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'createdDate', 'viewButton', 'responseButton'];
  currentUserId: number;

  constructor(
    private questionnaireService: QuestionnaireService,
    private responseService: ResponseService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.getAllQuestionnaires();
    if (this.authenticationService.currentUser) {
      this.currentUserId = this.authenticationService.currentUser.id;
    }
  }

  getAllQuestionnaires() {
    this.questionnaireService.getAll().subscribe(questionnairesReturned => {
      questionnairesReturned.forEach(q => {
        let questionnaireToAdd = new QuestionnaireListViewModel();
        questionnaireToAdd.id = q.id;
        questionnaireToAdd.name = q.name;
        questionnaireToAdd.createdDate = new Date(q.createdDate).toLocaleDateString();

        this.questionnairesList.push(questionnaireToAdd);
      });
    });
  }

  addQuestionnaire() {
    var model = {
      CreatedByUserId: 1,
      Name: "Test Questionnaire"
    };

    let questionnaireToAddToList = new QuestionnaireListViewModel();
    questionnaireToAddToList.createdDate = new Date().toLocaleDateString();
    questionnaireToAddToList.name = model.Name;

    this.questionnaireService.post(model).subscribe(result => questionnaireToAddToList.id = result);

    this.questionnairesList.push(questionnaireToAddToList);
  }

  viewQuestionnaire(questionnaireId: number) {
    return this.router.navigateByUrl('/questionnaire/' + questionnaireId);
  }

  addResponse(questionnaireId: number) {
    let model = {
      CompletedByUserId: this.currentUserId,
      QuestionnaireId: questionnaireId
    };

    this.responseService.post(model).subscribe(result => {
      return this.router.navigateByUrl('/response/' + result);
    });
  }
}