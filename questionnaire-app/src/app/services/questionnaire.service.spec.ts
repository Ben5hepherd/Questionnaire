import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';

import QuestionnaireService from './questionnaire.service';

describe('QuestionnaireService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionnaireService = TestBed.get(QuestionnaireService);
    expect(service).toBeTruthy();
  });
});
