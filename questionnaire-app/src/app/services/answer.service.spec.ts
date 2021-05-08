import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import AnswerService from './answer.service';

describe('AnswerService', () => {

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
    const service: AnswerService = TestBed.get(AnswerService);
    expect(service).toBeTruthy();
  });
});
