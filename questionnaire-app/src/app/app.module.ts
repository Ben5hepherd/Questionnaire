import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { ResponseComponent } from './components/response/response.component';

import { HttpClientModule } from '@angular/common/http';
import { QuestionnaireListComponent } from './components/questionnaire-list/questionnaire-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AddQuestionDialogComponent } from './components/add-question-dialog/add-question-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AddSectionDialogComponent } from './components/add-section-dialog/add-section-dialog.component';
import { SectionComponent } from './components/section/section.component';
import { LoginComponent } from './components/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { BannerComponent } from './components/banner/banner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app/interceptors/token-interceptor';
import { AnswerComponent } from './components/answer/answer.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ResponseListComponent } from './components/response-list/response-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddQuestionnaireDialogComponent } from './components/add-questionnaire-dialog/add-questionnaire-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    ResponseComponent,
    QuestionnaireListComponent,
    AddQuestionDialogComponent,
    AddSectionDialogComponent,
    SectionComponent,
    LoginComponent,
    BannerComponent,
    AnswerComponent,
    ResponseListComponent,
    AddQuestionnaireDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddSectionDialogComponent,
    AddQuestionDialogComponent,
    AddQuestionnaireDialogComponent
  ]
})
export class AppModule { }
