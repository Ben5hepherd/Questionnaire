import { Component, OnInit } from '@angular/core';
import ResponseService from 'src/app/services/response.service';
import { ActivatedRoute } from '@angular/router';
import ResponseViewModel from 'src/app/view_models/response-view-model';
import ResponseSectionViewModel from 'src/app/view_models/response-section-view-model';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  id: number;
  questionnaireName: string = "To-do";
  private sub: any;
  response: ResponseViewModel;

  constructor(private route: ActivatedRoute, private responseService: ResponseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.responseService.get(this.id).subscribe(result => {
      this.response = result;
    });
  }
}
