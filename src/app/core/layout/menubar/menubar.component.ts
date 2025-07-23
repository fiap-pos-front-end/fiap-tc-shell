import { CommonModule } from '@angular/common';
import { Component, inject, effect, viewChild, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { Menu, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { AuthStore } from '../../../shared/store/auth/auth.store';
import { LoginComponent } from '../../../pages/login/login.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  imports: [MenubarModule, AvatarModule, Ripple, CommonModule, RouterModule, MenuModule, Menu, LoginComponent],
  styles: `
    .p-menuitem-link-active {
      border-radius: 0.5rem;
      color: var(--p-menubar-item-focus-color);
      background: var(--p-menubar-item-focus-background);
    }
  `,
})
export class MenubarComponent {
  private readonly router = inject(Router);
  private readonly authStore = inject(AuthStore);

  readonly logout = viewChild<Menu>('logout');

  logoutMenu: MenuItem[] = [];
  menus: MenuItem[] = [];

  isAuthenticated = signal(false);
  modalOpen = false;

  effect = effect(() => {
      const token = this.authStore.token();
      const isLoggedIn = !!token;

      this.isAuthenticated.set(isLoggedIn);

      this.menus = isLoggedIn
        ? [
            { label: 'Início', routerLink: '/home', icon: 'pi pi-home' },
            { label: 'Categorias', routerLink: '/categorias', icon: 'pi pi-tags' },
            { label: 'Transferências', routerLink: '/transferencias', icon: 'pi pi-money-bill' },
          ]
        : [];

      this.logoutMenu = isLoggedIn
        ? [{ label: 'Sair', icon: 'pi pi-sign-out', command: () => this.onLogout() }]
        : [{ label: 'Entrar', icon: 'pi pi-sign-in', command: () => this.openLogin() }];
    });

  onLogout() {
    this.authStore.clearToken();
    this.router.navigate(['/']);
  }

  openLogin() {
    this.modalOpen = !this.modalOpen;
  }

  closeLogin() {
    this.modalOpen = !this.modalOpen;
  }
}
