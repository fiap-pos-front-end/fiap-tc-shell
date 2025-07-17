import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lp', pathMatch: 'full' },
  {
    path: 'lp',
    component: LandingPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
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
];
