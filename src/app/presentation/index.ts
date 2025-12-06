// Guards
/**
 * Why in presentation/?
  ✅ Controls route access (Angular Router)
  ✅ Makes UI decisions (show/hide pages)
  ✅ Uses application state (AuthStore)
  ❌ NO business logic
  ❌ NO external communication
 */
export * from './guards/auth.guard';

// Layout
export * from './layout/blank/blank.component';
export * from './layout/footer/footer.component';
export * from './layout/full/full.component';
export * from './layout/header/header.component';
export * from './layout/menubar/menubar.component';

// Micro Frontends Wrapper
export * from './mfe-wrappers/react-wrapper/react-wrapper.component';
export * from './mfe-wrappers/statement-wrapper/statement-wrapper.component';

// State
/**
 * Why in presentation/?
  ✅ Manages session state (logged in/out)
  ✅ Used by UI components and guards
  ✅ Manages localStorage (session persistence)
  ✅ Emits UI events (login/logout)
  ❌ NOT business logic (doesn't validate credentials)
  ❌ NOT infrastructure (doesn't make HTTP calls)
  Alternative perspective: You could argue it's "application state" and create a separate app/state/ folder, but in Clean Architecture, application state is typically part of the presentation layer.
 */
export * from './state/auth/auth.store';
