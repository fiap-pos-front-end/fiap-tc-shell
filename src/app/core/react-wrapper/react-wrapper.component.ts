import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-react-wrapper',
  template: '<div id="react-container"></div>',
})
export class ReactWrapperComponent {
  route = input<string>();
  async ngAfterViewInit() {
    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: environment.urlMfReact,
      exposedModule: './mount',
    });

    const inputRoute = this.route() ?? '';
    remoteModule.mount('react-container', inputRoute);
  }
}
