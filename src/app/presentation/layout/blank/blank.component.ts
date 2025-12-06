import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-blank',
  templateUrl: 'blank.component.html',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
})
export class BlankComponent {}
