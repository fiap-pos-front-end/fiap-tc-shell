import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { ReactWrapperComponent } from '@shell/core';

export const routes: Routes = [
  {
    path: 'angular',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost/fiap-tc-angular/remoteEntry.js',
        exposedModule: './routes',
      }).then((m) => m.routes),
  },
  {
    path: 'react',
    component: ReactWrapperComponent,
  },
];
