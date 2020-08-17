import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostSensorService } from '../../services/sensors/post-sensor.service';

@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.scss'],
})
export class SensorFormComponent implements OnInit {
  constructor(
    private register: PostSensorService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit(
    e: InputEvent,
    name: string,
    latitude: number,
    longitude: number,
    minValue: number,
    maxValue: number
  ): void {
    e.preventDefault();

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
    this.register
      .postSensor({
        name,
        location: { latitude, longitude },
        minValue,
        maxValue,
        active: false,
      })
      .subscribe({
        next: () => {
          this._snackBar.open('The sensor was created successfully', 'Continue', {
            duration: 2000,
          });
          this.router.navigate(['/sensors']);
        },
        error: (err) => {
          this._snackBar.open(err, 'Continue', {
            duration: 2000,
          });
        },
      });
  }

  goBack(e: InputEvent): void {
    e.preventDefault();
    this.router.navigate(['/sensors']);
  }
}
