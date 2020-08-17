import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from '../utils/httpErrorCatcher';

@Injectable({
  providedIn: 'root',
})
export class GetSensorService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get(env.URL + '/sensors')
      .pipe(catchError(handleHttpError));
  }

  getById(_id: string): Observable<any> {
    return this.http
      .get(env.URL + '/sensors/' + _id)
      .pipe(catchError(handleHttpError));
  }
}
