import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-react-wrapper',
  imports: [],
  template: '<div id="react-container"></div>',
})
export class ReactWrapperComponent {
  async ngAfterViewInit() {
    console.log('React container is ready');
    const remoteModule = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      exposedModule: './mount',
    });
    remoteModule.mount('react-container');
  }
}
