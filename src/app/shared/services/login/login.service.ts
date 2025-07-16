import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);

  private readonly userBaseUrl = `${environment.apiUrl}/user`;

  authUser(user: { Body: { email: string; password: string } }): Observable<any> {
    return this.httpClient.post(`${this.userBaseUrl}/auth`, user.Body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  getUser(): Observable<any> {
    return this.httpClient.get(this.userBaseUrl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  createUser(user: { Body: { username: string; email: string; password: string } }): Observable<any> {
    return this.httpClient.post(this.userBaseUrl, user.Body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
