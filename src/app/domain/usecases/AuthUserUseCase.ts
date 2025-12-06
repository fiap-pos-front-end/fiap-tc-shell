import { AuthResponse } from '@fiap-pos-front-end/fiap-tc-shared';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { AuthRepository } from '../repositories/AuthRepository';

export class AuthUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  execute(user: User): Observable<AuthResponse> {
    return this.authRepository.authUser(user);
  }
}
