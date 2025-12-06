import { AuthResponse } from '@fiap-pos-front-end/fiap-tc-shared';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { AuthRepository } from '../repositories/AuthRepository';

export class CreateUserUseCase {
  // Eu deveria injetar uma Store aqui?
  constructor(private readonly authRepository: AuthRepository) {}

  execute(user: User): Observable<AuthResponse> {
    if (!this.emailValidator(user.email)) {
      throw new Error('Email inválido');
    }

    const response = this.authRepository.createUser(user);
    if (response) {
      //  if (res?.access_token) this.authStore.setToken(res.access_token);
    }

    return response;
  }

  private emailValidator(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }
}
