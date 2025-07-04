import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { ReactWrapperComponent } from '@shell/core';

export const routes: Routes = [
  {
    path: 'angular',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './routes',
      }).then((m) => m.routes),
  },
  {
    path: 'react',
    component: ReactWrapperComponent,
  },
];
