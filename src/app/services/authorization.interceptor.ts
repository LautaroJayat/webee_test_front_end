import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { PersistenceService } from './persistence.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private store: PersistenceService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const JWT = this.store.getJWT();
    if (!JWT) {
      return next.handle(request);
    }

    const reqWithAuth = request.clone({
      headers: request.headers.set('Authorization', JWT),
    });
    return next.handle(reqWithAuth);
  }
}
