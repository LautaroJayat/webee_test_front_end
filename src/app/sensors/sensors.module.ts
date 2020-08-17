import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { SensorsRoutingModule } from './sensors-routing.module';
import { DialogComponent } from './sensor-list/dialog/dialog.component';
import { DeleteDialogComponent } from './sensor-list/delete-dialog/delete-dialog.component';
import { ListComponent } from './sensor-events/list/list.component';
import { CreateDialogComponent } from './sensor-events/create-dialog/create-dialog.component';
import { UpdateDialogComponent } from './sensor-events/update-dialog/update-dialog.component';
import { DeleteDialogComponent as DeleteServiceDialogComponent } from './sensor-events/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    DialogComponent,
    DeleteDialogComponent,
    ListComponent,
    CreateDialogComponent,
    UpdateDialogComponent,
    DeleteServiceDialogComponent,
  ],
  imports: [
    CommonModule,
    SensorsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
  ],
})
export class SensorsModule {}
