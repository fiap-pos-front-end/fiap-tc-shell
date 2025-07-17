import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

// TODO: mover isso para o shared
type CreateUserResponsePayload = {
  access_token: string;
};

type AuthUserResponsePayload = {
  access_token: string;
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);

  private readonly userBaseUrl = `${environment.apiUrl}/auth`;

  createUser(user: { Body: { username: string; email: string; password: string } }): Observable<any> {
    return this.httpClient.post<CreateUserResponsePayload>(this.userBaseUrl, user.Body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  authUser(email: string, password: string): Observable<AuthUserResponsePayload> {
    return this.httpClient.post<AuthUserResponsePayload>(
      `${this.userBaseUrl}/login`,
      { email, password },
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      },
    );
  }

  getUser(): Observable<any> {
    return this.httpClient.get(this.userBaseUrl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
