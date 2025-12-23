// Interceptors
/**
 * Why in infrastructure/?
  ✅ Modifies HTTP requests (adds headers)
  ✅ Handles HTTP errors (401, 403)
  ✅ Part of external communication layer
  ❌ NOT domain logic
  ❌ NOT pure presentation (users don't see it)
 */
export * from './interceptors/auth.interceptor';

// Repositories
export * from './repositories/HttpAuthRepository';
