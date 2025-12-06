import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { BlankComponent, FullComponent } from '@shell/presentation';
import { environment } from '../environments/environment';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./presentation/pages/landing-page/landing-page.component').then((m) => m.LandingPageComponent),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'banking',
        loadComponent: () => import('./presentation/pages/home/home.component').then((m) => m.HomeComponent),
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
        loadComponent: () => import('./presentation/pages/about-us/about-us.component').then((m) => m.AboutUsComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
