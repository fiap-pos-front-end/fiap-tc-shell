import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { ReactWrapperComponent } from '@shell/core';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: 'angular',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.urlMfAngular,
        exposedModule: './routes',
      }).then((m) => m.routes),
  },
  {
    path: 'react',
    component: ReactWrapperComponent,
  },
];
