import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { authGuard } from './guards/auth.guard';
import { BlankComponent } from './core/layout/blank/blank.component';
import { FullComponent } from './core/layout/full/full.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-inicial',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'pagina-inicial',
        loadComponent: () => import('./pages/landing-page/landing-page.component').then((m) => m.LandingPageComponent),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'transferencias',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.urlMfAngular,
            exposedModule: './routes',
          }).then((m) => m.routes),
      },
      {
        path: 'categorias',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: environment.urlMfAngular2,
            exposedModule: './routes',
          }).then((m) => m.routes),
      },
      {
        path: 'sobre-nos',
        loadComponent: () => import('./pages/about-us/about-us.component').then((m) => m.AboutUsComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'pagina-inicial',
  },
];
