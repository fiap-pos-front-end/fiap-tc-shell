import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponse } from '@fiap-pos-front-end/fiap-tc-shared';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../models/user.model';
import { AuthStore } from '../../store/auth/auth.store';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);
  private readonly authStore = inject(AuthStore);

  private readonly userBaseUrl = `${environment.apiUrl}/auth`;

  createUser(user: User): Observable<AuthResponse> {
    return this.httpClient
      .post<AuthResponse>(`${this.userBaseUrl}/register`, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap((res) => {
          if (res?.access_token) this.authStore.setToken(res.access_token);
        }),
      );
  }

  authUser(user: User): Observable<AuthResponse> {
    return this.httpClient
      .post<AuthResponse>(`${this.userBaseUrl}/login`, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap((res) => {
          if (res?.access_token) this.authStore.setToken(res.access_token);
        }),
      );
  }

  getUser(): Observable<unknown> {
    return this.httpClient.get(this.userBaseUrl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  emailValidator(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }
}
