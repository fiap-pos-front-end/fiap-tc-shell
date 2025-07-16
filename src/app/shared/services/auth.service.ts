import { Injectable } from '@angular/core';
import { getLastEvent } from '@fiap-pos-front-end/fiap-tc-shared';

@Injectable({ providedIn: 'root' })
export class AuthService {
  getToken() {
    return getLastEvent('jwtToken');
  }
}
