import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import { Router } from '@angular/router';
import { RouterStub } from 'src/app/test-stubs';
import { QuestionnaireListComponent } from './questionnaire-list.component';

describe('QuestionnaireListComponent', () => {
  let component: QuestionnaireListComponent;
  let fixture: ComponentFixture<QuestionnaireListComponent>;

  let routerMock = new RouterStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireListComponent ],
      providers:[{ provide: Router, useValue: routerMock }],
      imports: [
        MatTableModule,
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
