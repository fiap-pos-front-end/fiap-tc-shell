import { Observable } from 'rxjs';
import { User } from '../entities/user';

export interface AuthRepository {
  createUser(user: User): Observable<{ access_token: string }>;
  authUser(user: User): Observable<{ access_token: string }>;
  getUser(): Observable<unknown>;
}
