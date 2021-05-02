import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import ResponseService from 'src/app/services/response.service';
import ResponseViewModel from 'src/app/view_models/response-view-model';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.scss']
})
export class ResponseListComponent implements OnInit {

  questionnaireId: number;
  questionnaireName: string = "To-do";
  private sub: any;
  responses: ResponseViewModel[] = [];

  constructor(private route: ActivatedRoute, private responseService: ResponseService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionnaireId = +params['id'];
    });
    this.responseService.getAll(this.questionnaireId).subscribe(result => {
      result.forEach(element => {
        this.responses.push(element);
      });
    });
  }

  delete(id: number) {
    this.responseService.delete(id).subscribe(() => {
      this.responses = this.responses.filter(r => r.id !== id);
      this.snackBar.open("Response Deleted", "",
      {
        duration: 2000,
        panelClass: "success-snack-bar"
      });
    },error => {
      this.snackBar.open("Response Failed to Delete", "",
      {
        duration: 2000,
        panelClass: "error-snack-bar"
      });
    })
  }
}