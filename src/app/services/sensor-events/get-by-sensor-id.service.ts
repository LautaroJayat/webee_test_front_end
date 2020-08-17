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
export class GetBySensorIdService {
  constructor(private http: HttpClient) {}
  getBySensorId(_id: string): Observable<any> {
    return this.http
      .get(env.URL + `/sensor-events/by-sensor/${_id}`)
      .pipe(catchError(handleHttpError));
  }
}
