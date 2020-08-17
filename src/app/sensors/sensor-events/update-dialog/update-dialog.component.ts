import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateService } from '../../../services/sensor-events/update.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss'],
})
export class UpdateDialogComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private update: UpdateService,
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('data', this.data);
  }

  onSubmit(e: InputEvent, value: number) {
    e.preventDefault();
    const event_id = this.data._id;
    const sensor_id = this.data.sensor._id;

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

    if (
      value < this.data.sensor.minValue ||
      value > this.data.sensor.maxValue
    ) {
      this._snackBar.open(
        `Your value must be between ${this.data.sensor.minValue} and ${this.data.sensor.maxValue}`,
        'Continue',
        {
          duration: 2000,
        }
      );
      return;
    }

    this.update
      .updateEvent({ value, sensorId: sensor_id }, event_id)
      .subscribe({
        next: () => {
          this._snackBar.open(
            'The event was updated successfully',
            'Continue',
            {
              duration: 2000,
            }
          );

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
