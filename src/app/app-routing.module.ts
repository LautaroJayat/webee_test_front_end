import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SigninComponent } from './authentication/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',

    component: LoginComponent,
  },
  {
    path: 'signin',
    pathMatch: 'full',
    component: SigninComponent,
  },
  {
    path: 'sensors',
    loadChildren: () =>
      import('./sensors/sensors.module').then((m) => m.SensorsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
