import { Injectable } from '@angular/core';
import { sensorEventBody } from '../../models/sensor-events';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from '../utils/httpErrorCatcher';

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  constructor(private http: HttpClient) {}
  createEvent(body: sensorEventBody): Observable<any> {
    return this.http
      .post(env.URL + `/sensor-events/${body.sensorId}`, body)
      .pipe(catchError(handleHttpError));
  }
}
