import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AddQuestionnaireModel {
  name: string;
}

@Component({
  selector: 'app-add-questionnaire-dialog',
  templateUrl: './add-questionnaire-dialog.component.html',
  styleUrls: ['./add-questionnaire-dialog.component.scss']
})
export class AddQuestionnaireDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddQuestionnaireDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddQuestionnaireModel) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}