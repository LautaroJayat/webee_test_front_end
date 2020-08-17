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
export class UpdateService {
  constructor(private http: HttpClient) {}
  updateEvent(body: sensorEventBody, event_id: string): Observable<any> {
    return this.http
      .put(env.URL + `/sensor-events/${event_id}`, body)
      .pipe(catchError(handleHttpError));
  }
}
