import { AuthResponse } from '@fiap-pos-front-end/fiap-tc-shared';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { AuthRepository } from '../repositories/AuthRepository';

export class CreateUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  execute(user: User): Observable<AuthResponse> {
    if (!this.emailValidator(user.email)) {
      throw new Error('Email inválido');
    }

    return this.authRepository.createUser(user);
  }

  private emailValidator(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }
}
