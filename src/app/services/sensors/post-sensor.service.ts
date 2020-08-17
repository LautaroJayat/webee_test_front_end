import { Injectable } from '@angular/core';
import { sensorBody } from '../../models/sensors';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from '../utils/httpErrorCatcher';

@Injectable({
  providedIn: 'root',
})
export class PostSensorService {
  constructor(private http: HttpClient) {}

  postSensor(body: sensorBody): Observable<any> {
    return this.http
      .post(env.URL + '/sensors', body)
      .pipe(catchError(handleHttpError));
  }
}
