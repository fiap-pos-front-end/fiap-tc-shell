import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthResponse } from '@fiap-pos-front-end/fiap-tc-shared';
import { User } from '@shell/domain';
import { AuthRepository } from '@shell/domain/repositories/AuthRepository';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export class HttpAuthRepository implements AuthRepository {
  private readonly httpClient = inject(HttpClient);

  private readonly userBaseUrl = `${environment.apiUrl}/auth`;

  createUser(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.userBaseUrl}/register`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  authUser(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.userBaseUrl}/login`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  getUser(): Observable<unknown> {
    return this.httpClient.get(this.userBaseUrl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
