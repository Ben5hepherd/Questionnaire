import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import ResponseService from './response.service';

describe('ResponseService', () => {

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
    const service: ResponseService = TestBed.get(ResponseService);
    expect(service).toBeTruthy();
  });
});
