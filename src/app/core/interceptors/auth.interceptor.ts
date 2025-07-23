import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStore } from '../../shared/store/auth/auth.store';
import { catchError, EMPTY, throwError } from 'rxjs';
import { Router } from '@angular/router';

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
        router.navigate(['/pagina-inicial']);
        return EMPTY;
      }
      return throwError(() => err);
    }),
  );
};
