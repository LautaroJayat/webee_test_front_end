import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateService } from '../../../services/sensor-events/create.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss'],
})
export class CreateDialogComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private createOne: CreateService,
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onSubmit(e: InputEvent, value: number) {
    e.preventDefault();
    const _id = this.data._id;

    if (!value) {
      this._snackBar.open(
        'You must provide latitude to the sensor',
        'Continue',
        {
          duration: 2000,
        }
      );
      return;
    }

    if (value < this.data.minValue || value > this.data.maxValue) {
      this._snackBar.open(
        `Your value must be between ${this.data.minValue} and ${this.data.maxValue}`,
        'Continue',
        {
          duration: 2000,
        }
      );
      return;
    }
    console.log(name, value);
    this.createOne.createEvent({ value, sensorId: _id }).subscribe({
      next: () => {
        this._snackBar.open('The event was created successfully', 'Continue', {
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
    this.dialogRef.close();
  }

  onCancel(e: InputEvent) {
    this.dialogRef.close();
  }
}
