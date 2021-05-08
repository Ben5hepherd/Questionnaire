import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterStub } from '../test-stubs';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {

  let routerMock = new RouterStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ { provide: Router, useValue: routerMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
