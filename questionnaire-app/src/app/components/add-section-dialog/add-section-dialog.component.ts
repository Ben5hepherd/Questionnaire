import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AddSectionModel {
  name: string;
}

@Component({
  selector: 'app-add-section-dialog',
  templateUrl: './add-section-dialog.component.html',
  styleUrls: ['./add-section-dialog.component.scss']
})
export class AddSectionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddSectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddSectionModel) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}