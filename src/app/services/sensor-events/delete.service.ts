import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from '../utils/httpErrorCatcher';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  constructor(private http: HttpClient) {}
  deleteOne(_id: string): Observable<any> {
    return this.http
      .delete(env.URL + `/sensor-events/${_id}`)
      .pipe(catchError(handleHttpError));
  }
}
