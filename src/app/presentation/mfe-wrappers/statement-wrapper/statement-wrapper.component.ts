import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-statement-wrapper',
  template: ` <ng-container #vc></ng-container> `,
})
export class StatementWrapperComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  vc!: ViewContainerRef;

  async ngOnInit() {
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: environment.urlMfAngular,
      exposedModule: './StatementPage',
    });

    this.vc.createComponent(module.StatementComponent);
  }
}
