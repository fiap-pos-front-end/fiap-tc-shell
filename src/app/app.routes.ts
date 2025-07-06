import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { ReactWrapperComponent } from '@shell/core';
import { environment } from '../environments/environment';

export const routes: Routes = [
  // TODO: De alguma forma, acho que precisamos deixar esse path "limpo" para que o remote Angular não precise "conhecer" o path do shell para que os redirects funcionem.
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
