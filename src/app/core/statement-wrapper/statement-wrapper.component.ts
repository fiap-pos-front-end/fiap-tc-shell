import { Component, ViewContainerRef, OnInit, ViewChild } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../../../environments/environment';

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
      exposedModule: './TransactionsPage',
    });

    this.vc.createComponent(module.TransactionsPageComponent);
  }
}
