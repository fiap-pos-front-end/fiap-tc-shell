import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-react-wrapper',
  template: '<div id="react-container"></div>',
})
export class ReactWrapperComponent {
  async ngAfterViewInit() {
    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: environment.urlMfReact,
      exposedModule: './mount',
    });

    remoteModule.mount('react-container');
  }
}
