import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, HeaderComponent } from '@shell/core';

@Component({
  selector: 'app-blank',
  templateUrl: 'blank.component.html',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
})
export class BlankComponent {}
