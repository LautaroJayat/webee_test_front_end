import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModifySensorService } from '../../../services/sensors/modify-sensor.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private sensors: ModifySensorService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onSubmit(
    e: InputEvent,
    name: string,
    latitude: number,
    longitude: number,
    minValue: number,
    maxValue: number,
    active: boolean
  ) {
    e.preventDefault();
    const _id = this.data._id;

    if (name.length < 5) {
      this._snackBar.open(
        'Your sensor should have at least 4 characters',
        'Continuar',
        {
          duration: 2000,
        }
      );
      return;
    }

    if (!latitude) {
      this._snackBar.open(
        'You must provide latitude to the sensor',
        'Continue',
        {
          duration: 2000,
        }
      );
      return;
    }
    if (!longitude) {
      this._snackBar.open(
        'You must provide longitude to the sensor',
        'Continue',
        {
          duration: 2000,
        }
      );
      return;
    }
    if (!minValue) {
      this._snackBar.open(
        'You must provide minValue to the sensor',
        'Continue',
        {
          duration: 2000,
        }
      );
      return;
    }
    if (!maxValue) {
      this._snackBar.open(
        'You must provide maxValue to the sensor',
        'Continue',
        {
          duration: 2000,
        }
      );
      return;
    }

    this.sensors
      .updateSensor({
        _id,
        name,
        location: { latitude, longitude },
        minValue,
        maxValue,
        active,
      })
      .subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: (err) => {
          this._snackBar.open(err, 'Continue', {
            duration: 2000,
          });
        },
      });
  }
  setActive(e: InputEvent) {
    this.data.active = e;
  }
  onCancel(e: InputEvent) {
    this.dialogRef.close();
  }
}
