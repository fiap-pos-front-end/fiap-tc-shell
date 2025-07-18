import { CommonModule } from '@angular/common';
import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent, MenubarComponent } from '@shell/core';
import { filter } from 'rxjs/operators';
import { AuthStore } from './shared/store/auth/auth.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly authStore = inject(AuthStore);

  isAuthenticated = signal(false);

  mainClass = '';
  secondClass = '';

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      this.mainClass = url == '/' ? 'flex-1 bg-slate-100' : 'flex-1 p-4 bg-slate-100';
      this.secondClass = url == '/' ? 'mx-auto max-w-10xl' : 'mx-auto max-w-7xl';
    });

    effect(() => {
      const token = this.authStore.token();
      this.isAuthenticated.set(!!token && token !== '');
    });
  }

  ngOnInit(): void {
    const token = this.authStore.token();
    this.authStore.setToken(token); // Note: talvez não seja o melhor jeito, mas por ora, garante que os MFEs receberão o novo token
  }
}
