import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../shared/store/auth/auth.store';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthStore);
  const router = inject(Router);

  const token = auth.token();

  if (token && token.trim().length > 0) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
