import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRefStub, MatDialogStub } from 'src/app/test-stubs';
import { AddQuestionDialogComponent } from './add-question-dialog.component';

describe('AddQuestionDialogComponent', () => {
  let component: AddQuestionDialogComponent;
  let fixture: ComponentFixture<AddQuestionDialogComponent>;

  let matDialogMock = new MatDialogStub();
  let matDialogRefMock = new MatDialogRefStub();
  let matDialogDataMock = { name: "test" };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionDialogComponent ],
      providers:[
        { provide: MatDialog, useValue: matDialogMock },
        { provide: MatDialogRef, useValue: matDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: matDialogDataMock }
      ],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatOptionModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
