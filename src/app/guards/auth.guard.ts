import { inject, untracked } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../shared/store/auth/auth.store';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthStore);
  const router = inject(Router);

  const token = untracked(() => auth.token());

  if (token?.trim()) {
    return true;
  }

  router.navigate(['/inicio']);
  return false;
};
