import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      width: '250px',
      disableClose: true,      
      data: {name: this.name, animal: this.animal}
    });
    console.log('dialogRef:', dialogRef);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
