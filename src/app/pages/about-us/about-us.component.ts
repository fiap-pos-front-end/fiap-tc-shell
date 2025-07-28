import { Component } from '@angular/core';
import { ReactWrapperComponent } from '@shell/core';

@Component({
  selector: 'app-about-us',
  imports: [ReactWrapperComponent],
  template: `<app-react-wrapper [route]="'/about-us'" />`,
})
export class AboutUsComponent {}
