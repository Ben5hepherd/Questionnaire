import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireComponent } from './questionnaire.component';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import QuestionnaireService from '../../services/questionnaire.service';
import { SectionService } from '../../services/section.service';
import QuestionService from '../../services/question.service';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog, MatDialogModule, MatDialogRef } from '../../../../node_modules/@angular/material/dialog';
import { MatCardModule } from '../../../../node_modules/@angular/material/card';
import { of, Observable } from '../../../../node_modules/rxjs';
import QuestionnaireViewModel from '../../view_models/questionnaire-view-model';
import SectionViewModel from '../../view_models/section-view-model';
import { ActivatedRouteStub, QuestionnaireServiceStub, QuestionServiceStub, SectionServiceStub, AuthenticationServiceStub, MatDialogStub, MatDialogRefStub } from '../../test-stubs';
import { By } from '../../../../node_modules/@angular/platform-browser';
import { SectionComponent } from '../section/section.component';
import { AddSectionDialogComponent } from '../add-section-dialog/add-section-dialog.component';
import { MatInputModule } from '../../../../node_modules/@angular/material/input';
import { MatFormFieldModule } from '../../../../node_modules/@angular/material/form-field';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

const questionnaireId = 53;
const questionnaireName = "Test Questionnaire 1";

const sectionId = 45;
const sectionOrdinal = 76;
const sectionName = "Test Section 1";

const newSectionId = 46;
const newSectionName = "New Section Name";

const newQuestionId = 5;
const newQuestionText = "A Test Question";

let activatedRouteMock = new ActivatedRouteStub();
activatedRouteMock.params = of({"id": questionnaireId});

let questionnaireServiceMock = new QuestionnaireServiceStub();
let authenticationServiceMock = new AuthenticationServiceStub();
let sectionServiceMock = new SectionServiceStub();
let questionServiceMock = new QuestionServiceStub();
let matDialogMock = new MatDialogStub();
let matDialogRefMock = new MatDialogRefStub();

fdescribe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent;
  let fixture: ComponentFixture<QuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionnaireComponent,
        SectionComponent,
        AddSectionDialogComponent
      ],
      providers:[
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: QuestionnaireService, useValue: questionnaireServiceMock },
        { provide: QuestionService, useValue: questionServiceMock },
        { provide: SectionService, useValue: sectionServiceMock },
        { provide: AuthenticationService, useValue: authenticationServiceMock },
        { provide: MatDialog, useValue: matDialogMock },
        { provide: MatDialogRef, useValue: matDialogRefMock }
      ],
      imports: [
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent);
    component = fixture.componentInstance;
    
    let questionnaireToReturn = new QuestionnaireViewModel();
    questionnaireToReturn.name = questionnaireName;
    questionnaireToReturn.id = questionnaireId;
    questionnaireToReturn.sections = new Array<SectionViewModel>();
    questionnaireToReturn.sections[0] = new SectionViewModel();
    questionnaireToReturn.sections[0].id = sectionId;
    questionnaireToReturn.sections[0].name = sectionName;
    questionnaireToReturn.sections[0].ordinal = sectionOrdinal;
    questionnaireToReturn.sections[0].questions = [];

    spyOn(questionnaireServiceMock, "get").and.returnValue(of(questionnaireToReturn));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.id).toBe(questionnaireId);
    expect(component.name).toBe(questionnaireName);

    expect(component.orderedSections[0].id).toBe(sectionId);
    expect(component.orderedSections[0].name).toBe(sectionName);
    expect(component.orderedSections[0].ordinal).toBe(sectionOrdinal);
  });

  it('should add a section if user is an admin', () => {
    authenticationServiceMock.isUserAdmin = true;
    fixture.detectChanges();

    spyOn(matDialogMock, "open").and.returnValue(matDialogRefMock);
    spyOn(matDialogRefMock, "afterClosed").and.returnValue(of({name: newSectionName}));
    spyOn(sectionServiceMock, "post").and.returnValue(of(newSectionId));

    let addSectionButtonElement = fixture.debugElement.query(By.css('#add-section-button'));
    addSectionButtonElement.nativeElement.click();

    expect(component.orderedSections.length).toBe(2);
    expect(component.orderedSections[0].id).toBe(sectionId);
    expect(component.orderedSections[0].name).toBe(sectionName);
    expect(component.orderedSections[1].id).toBe(newSectionId);
    expect(component.orderedSections[1].name).toBe(newSectionName);
  });

  it('should add a question if user is an admin', () => {
    authenticationServiceMock.isUserAdmin = true;
    fixture.detectChanges();

    spyOn(matDialogMock, "open").and.returnValue(matDialogRefMock);
    spyOn(matDialogRefMock, "afterClosed").and.returnValue(of({text: newQuestionText, sectionId: sectionId}));
    spyOn(questionServiceMock, "post").and.returnValue(of(newQuestionId));

    let addQuestionButtonElement = fixture.debugElement.query(By.css('#add-question-button'));
    addQuestionButtonElement.nativeElement.click();

    expect(component.orderedSections[0].questions.length).toBe(1);
    expect(component.orderedSections[0].questions[0].id).toBe(newQuestionId);
    expect(component.orderedSections[0].questions[0].ordinal).toBe(0);
    expect(component.orderedSections[0].questions[0].text).toBe(newQuestionText);
  });
});
