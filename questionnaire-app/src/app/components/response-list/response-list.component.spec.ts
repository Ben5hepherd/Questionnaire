import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRouteStub } from 'src/app/test-stubs';

import { ResponseListComponent } from './response-list.component';

describe('ResponseListComponent', () => {
  let component: ResponseListComponent;
  let fixture: ComponentFixture<ResponseListComponent>;

  const questionnaireId = 53;
  let activatedRouteMock = new ActivatedRouteStub();
  activatedRouteMock.params = of({"id": questionnaireId});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseListComponent ],
      providers:[
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ],
      imports: [
        MatExpansionModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
