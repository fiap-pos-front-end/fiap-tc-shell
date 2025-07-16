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
  mainClass = 'flex-1 bg-slate-100';
  isAuthenticated = false;

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;

      if (url != '/') {
        this.mainClass += ' p-4';
      }
    });
  }
}
