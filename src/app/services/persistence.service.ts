import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  constructor() {}

  saveJWT(JWT: string): void {
    localStorage.setItem('JWT', JWT);
  }
  getJWT(): string | null {
    return localStorage.getItem('JWT');
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
