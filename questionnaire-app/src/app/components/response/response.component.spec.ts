import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRouteStub } from 'src/app/test-stubs';
import { AnswerComponent } from '../answer/answer.component';
import { ResponseComponent } from './response.component';

const questionnaireId = 34;
let activatedRouteMock = new ActivatedRouteStub();
activatedRouteMock.params = of({"id": questionnaireId});

describe('ResponseComponent', () => {
  let component: ResponseComponent;
  let fixture: ComponentFixture<ResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseComponent, AnswerComponent ],
      providers:[
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
      imports: [
        MatCardModule,
        MatInputModule,
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
