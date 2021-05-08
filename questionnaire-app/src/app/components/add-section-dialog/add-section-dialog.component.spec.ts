import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MatFormFieldModule, MatInputModule, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRefStub, MatDialogStub } from 'src/app/test-stubs';
import { AddSectionDialogComponent } from './add-section-dialog.component';

describe('AddSectionDialogComponent', () => {
  let component: AddSectionDialogComponent;
  let fixture: ComponentFixture<AddSectionDialogComponent>;

  let matDialogMock = new MatDialogStub();
  let matDialogRefMock = new MatDialogRefStub();
  let matDialogDataMock = { name: "test" };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionDialogComponent ],
      providers:[
        { provide: MatDialog, useValue: matDialogMock },
        { provide: MatDialogRef, useValue: matDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: matDialogDataMock }
      ],
      imports: [
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
    fixture = TestBed.createComponent(AddSectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
