import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from '@shell/core';
import { FooterComponent } from '@shell/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'fiap-tc-shell';

  public mainClass   = '';
  public secondClass = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      this.mainClass = (url == '/') ? 'flex-1 bg-slate-100' : 'flex-1 p-4 bg-slate-100';
      this.secondClass = (url == '/') ? 'mx-auto max-w-10xl' : 'mx-auto max-w-7xl';
    });
  }
}
