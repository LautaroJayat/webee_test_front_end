import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';

import { GetBySensorIdService } from '../../../services/sensor-events/get-by-sensor-id.service';
import { GetSensorService } from '../../../services/sensors/get-sensor.service';

import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['value', 'timestamp', '_id'];
  dataSource = [];
  _id: string = '';
  sensor: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private getEvents: GetBySensorIdService,
    private getSensor: GetSensorService,
    private _snackBar: MatSnackBar
  ) {
    this._id = this.route.snapshot.params._id;
  }

  ngOnInit(): void {
    this.fetchAllEventsBySensorID();
    this.fetchSensorByID();
  }

  goBack(e: InputEvent) {
    this.router.navigate(['/sensors']);
  }

  fetchSensorByID(): void {
    this.getSensor.getById(this._id).subscribe({
      next: (sensor) => {
        this.sensor = sensor;
      },
      error: (err) => {
        this._snackBar.open(err, 'Continue', {
          duration: 2000,
        });
      },
    });
  }

  fetchAllEventsBySensorID(): void {
    this.getEvents.getBySensorId(this._id).subscribe({
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
        this.fetchAllEventsBySensorID();
      },
    });
  }
  editOne(e: InputEvent, _id: string): void {
    const sensor = this.sensor;
    e.preventDefault;
    this.openEditDialog(_id, sensor);
  }

  openEditDialog(_id: string, sensor: any): void {
    let defaultOpts: MatDialogConfig = {
      height: 'auto',
      width: '450px',
    };

    if (_id) {
      defaultOpts = {
        ...defaultOpts,
        data: { _id, sensor },
      };
    }

    const dialogRef = this.dialog.open(UpdateDialogComponent, defaultOpts);

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.fetchAllEventsBySensorID();
      },
    });
  }
}
