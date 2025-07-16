import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  authUser(user: { Body: { email: string; password: string } }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth`, user.Body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getUser(): Observable<any> {
    return this.http.get(this.baseUrl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  createUser(user: { Body: { username: string; email: string; password: string } }): Observable<any> {
    return this.http.post(this.baseUrl, user.Body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
