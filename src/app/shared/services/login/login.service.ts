import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponsePayload } from '@fiap-pos-front-end/fiap-tc-shared';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);

  private readonly userBaseUrl = `${environment.apiUrl}/auth`;

  createUser(username: string, email: string, password: string): Observable<AuthResponsePayload> {
    return this.httpClient.post<AuthResponsePayload>(
      `${this.userBaseUrl}/register`,
      { email, password },
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      },
    );
  }

  authUser(email: string, password: string): Observable<AuthResponsePayload> {
    return this.httpClient.post<AuthResponsePayload>(
      `${this.userBaseUrl}/login`,
      { email, password },
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      },
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
