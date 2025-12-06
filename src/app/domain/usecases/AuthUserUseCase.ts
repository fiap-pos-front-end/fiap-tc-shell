import { AuthResponse } from '@fiap-pos-front-end/fiap-tc-shared';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { AuthRepository } from '../repositories/AuthRepository';

export class AuthUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  execute(user: User): Observable<AuthResponse> {
    const response = this.authRepository.authUser(user);
    if (response) {
      // if (res?.access_token) this.authStore.setToken(res.access_token);
    }

    return response;
  }
}
