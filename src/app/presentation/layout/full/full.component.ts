import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-full',
  templateUrl: 'full.component.html',
  imports: [RouterOutlet, MenubarComponent],
})
export class FullComponent {}
