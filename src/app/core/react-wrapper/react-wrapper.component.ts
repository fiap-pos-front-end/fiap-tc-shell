import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-react-wrapper',
  template: '<div id="react-container"></div>',
})
export class ReactWrapperComponent {
  async ngAfterViewInit() {
    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost/fiap-tc-react/remoteEntry.js',
      exposedModule: './mount',
    });

    remoteModule.mount('react-container');
  }
}
