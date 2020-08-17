import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { SensorFormComponent } from './sensor-form/sensor-form.component';
import { ListComponent } from './sensor-events/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: SensorListComponent,
  },
  {
    path: 'add',
    component: SensorFormComponent,
  },
  {
    path: 'events/:_id',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensorsRoutingModule {}
