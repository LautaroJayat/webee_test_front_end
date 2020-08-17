import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from '../sensor-events/create-dialog/create-dialog.component';

import { GetSensorService } from '../../services/sensors/get-sensor.service';
import { sensor } from '../../models/sensors';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss'],
})
export class SensorListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'location',
    'active',
    'minValue',
    'maxValue',
    '_id',
    'events',
  ];
  dataSource: sensor[] = [];

  constructor(
    private router: Router,
    private getSensor: GetSensorService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll(): void {
    this.getSensor.getAll().subscribe({
      next: (sensors) => {
        this.dataSource = sensors;
      },
      error: (err) => {
        this._snackBar.open(err, 'Continue', {
          duration: 2000,
        });
      },
    });
  }

  deleteOne(e: InputEvent, _id: string): void {
    e.preventDefault;
    this.openDeleteWarning(_id);
  }

  openDeleteWarning(_id: string): void {
    let defaultOpts: MatDialogConfig = {
      height: 'auto',
      width: '450px',
    };

    if (_id) {
      defaultOpts = {
        ...defaultOpts,
        data: _id,
      };
    }

    const dialogRef = this.dialog.open(DeleteDialogComponent, defaultOpts);

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.fetchAll();
      },
    });
  }

  editOne(e: InputEvent, _id: string): void {
    this.openDialog(this.dataSource.find((e) => e._id === _id));
  }

  openDialog(sensor?: sensor): void {
    let defaultOpts: MatDialogConfig = {
      height: 'auto',
      width: '450px',
    };

    if (sensor) {
      defaultOpts = {
        ...defaultOpts,
        data: sensor,
      };
    }

    const dialogRef = this.dialog.open(DialogComponent, defaultOpts);

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.fetchAll();
      },
    });
  }

  addEvent(e: InputEvent, _id: string): void {
    this.openDialogAddEvent(this.dataSource.find((e) => e._id === _id));
  }

  openDialogAddEvent(sensor?: sensor): void {
    let defaultOpts: MatDialogConfig = {
      height: 'auto',
      width: '450px',
    };

    if (sensor) {
      defaultOpts = {
        ...defaultOpts,
        data: sensor,
      };
    }

    const dialogRef = this.dialog.open(CreateDialogComponent, defaultOpts);

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.fetchAll();
      },
    });
  }

  viewEvents(e: InputEvent, _id: string): void {
    e.preventDefault();
    this.router.navigate([`/sensors/events/${_id}`]);
  }

  gotToAddForm(e: InputEvent): void {
    e.preventDefault();
    this.router.navigate(['/sensors/add']);
  }
}
