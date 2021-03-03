import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionnaireDialogComponent } from './add-questionnaire-dialog.component';

describe('AddQuestionnaireDialogComponent', () => {
  let component: AddQuestionnaireDialogComponent;
  let fixture: ComponentFixture<AddQuestionnaireDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionnaireDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionnaireDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
