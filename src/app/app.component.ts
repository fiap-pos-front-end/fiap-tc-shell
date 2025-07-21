import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent, MenubarComponent } from '@shell/core';
import { filter } from 'rxjs/operators';
import { AuthStore } from './shared/store/auth/auth.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly authStore = inject(AuthStore);

  isAuthenticated = signal(false);

  mainClass = '';
  secondClass = '';

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      this.mainClass = url == '/' ? '' : 'p-4';
      this.secondClass = url == '/' ? 'w-full' : 'max-w-7xl';
    });

    effect(() => {
      const token = this.authStore.token();
      this.isAuthenticated.set(!!token && token !== '');
      this.authStore.setToken(token);
    });
  }
}
