import { Injectable } from '@angular/core';
import { sensor } from '../../models/sensors';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from '../utils/httpErrorCatcher';

@Injectable({
  providedIn: 'root',
})
export class ModifySensorService {
  constructor(private http: HttpClient) {}

  updateSensor(body: sensor): Observable<any> {
    return this.http
      .put(env.URL + `/sensors/${body._id}`, body)
      .pipe(catchError(handleHttpError));
  }
}
