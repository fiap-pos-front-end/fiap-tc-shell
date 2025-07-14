import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from '@shell/core';
import { FooterComponent } from '@shell/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'fiap-tc-shell';
}
