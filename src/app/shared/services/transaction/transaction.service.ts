/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly httpClient = inject(HttpClient);

  private readonly transactionBaseUrl = `${environment.apiUrl}/transfers`;

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.transactionBaseUrl);
  }
}
