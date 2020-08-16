import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export function handleHttpError(e: HttpErrorResponse) {
  if (e.error instanceof ErrorEvent) {
    console.error('Ups! we got an error', e.error.message);
  } else {
    console.error(
      `The backend returned with a status code ${e.status} - ${e.statusText}.
       The following is the information about the error ${e.error}`
    );
  }
  console.log(e);
  return throwError(
    e.error.message ||
      'An error had ocurred, please try again later or contact with our support team :).'
  );
}
