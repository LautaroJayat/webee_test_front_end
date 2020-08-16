import { Injectable } from '@angular/core';
import { userCredentials } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { PersistenceService } from './persistence.service';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { handleHttpError } from './utils/httpErrorCatcher';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private store: PersistenceService) {}

  logIn(body: userCredentials): Observable<any> {
    return this.http.post(env.URL + '/auth', body).pipe(
      catchError(handleHttpError),
      tap((JWT) => {
        this.store.saveJWT(JWT);
      })
    );
  }

  logOut(): void {
    this.store.clearStorage();
  }
}
