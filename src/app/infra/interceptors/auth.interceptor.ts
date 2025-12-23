import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '@shell/presentation/state/auth/auth.store';
import { catchError, EMPTY, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const store = inject(AuthStore);
  const router = inject(Router);
  const token = store.token();

  if (!token) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq).pipe(
    catchError((err) => {
      if (err.status === 401 || err.status === 403) {
        store.clearToken();
        router.navigate(['/inicio']);
        return EMPTY;
      }
      return throwError(() => err);
    }),
  );
};
