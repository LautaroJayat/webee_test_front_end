import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DeleteService } from '../../../services/sensor-events/delete.service';
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private sensorEvent: DeleteService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  onSubmit(e: InputEvent) {
    e.preventDefault();
    const _id = this.data;
    console.log(_id);

    this.sensorEvent.deleteOne(_id).subscribe({
      next: () => {
        this._snackBar.open('Event deleted successfully', 'Continue', {
          duration: 2000,
        });
        this.dialogRef.close();
      },
      error: (err) => {
        this._snackBar.open(err, 'Continue', {
          duration: 2000,
        });
      },
    });
  }

  onCancel(e: InputEvent) {
    this.dialogRef.close();
  }
}
