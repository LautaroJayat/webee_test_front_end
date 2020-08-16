import { Injectable } from '@angular/core';
import { userCredentials } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { handleHttpError } from './utils/httpErrorCatcher';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private http: HttpClient) {}

  signIn(body: userCredentials): Observable<any> {
    return this.http
      .post(env.URL + '/users', body)
      .pipe(catchError(handleHttpError));
  }
}
