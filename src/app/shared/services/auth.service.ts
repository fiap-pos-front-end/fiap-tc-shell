import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token = '';
  getToken() {
    return this.token;
  }
  setToken(token: string) {
    this.token = token;
  }
}
