import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
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
