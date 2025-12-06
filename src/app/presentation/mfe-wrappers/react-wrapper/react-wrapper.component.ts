import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-react-wrapper',
  template: '<div id="react-container"></div>',
})
export class ReactWrapperComponent {
  route = input<string>();
  async ngAfterViewInit() {
    const remoteModule = await loadRemoteModule({
      type: 'script',
      remoteEntry: environment.urlMfReact,
      remoteName: 'mfereact',
      exposedModule: './mount',
    });

    const inputRoute = this.route() ?? '/';
    remoteModule.mount('react-container', inputRoute);
  }
}
