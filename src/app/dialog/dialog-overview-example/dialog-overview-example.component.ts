import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../dialog.component';

@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: './dialog-overview-example.component.html',
  styleUrls: ['./dialog-overview-example.component.css']
})
export class DialogOverviewExampleComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
