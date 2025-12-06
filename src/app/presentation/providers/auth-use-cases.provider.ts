import { AuthRepository, AuthUserUseCase, CreateUserUseCase } from '@shell/domain';
import { HttpAuthRepository } from '@shell/infra/repositories/HttpAuthRepository';

export const AUTH_USE_CASES_PROVIDERS = [
  {
    provide: AuthUserUseCase,
    useFactory: (authRepository: AuthRepository) => new AuthUserUseCase(authRepository),
    deps: [HttpAuthRepository],
  },
  {
    provide: CreateUserUseCase,
    useFactory: (authRepository: AuthRepository) => new CreateUserUseCase(authRepository),
    deps: [HttpAuthRepository],
  },
];
