import { CommonModule } from '@angular/common';
import { Component, inject, viewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { Menu, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';
import { AuthStore } from '../../../shared/store/auth/auth.store';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  imports: [MenubarModule, AvatarModule, Ripple, CommonModule, RouterModule, MenuModule, Menu],
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

  readonly logoutMenu: MenuItem[] = [{ label: 'Sair', routerLink: '/', icon: 'pi pi-sign-out' }];

  readonly menus: MenuItem[] = [
    { label: 'Início', routerLink: '/home', icon: 'pi pi-home', routerLinkActiveOptions: { exact: true } },
    { label: 'Categorias', routerLink: '/categorias', icon: 'pi pi-tags' },
    { label: 'Transferências', routerLink: '/transferencias', icon: 'pi pi-money-bill' },
  ];

  onLogout() {
    this.authStore.clearToken();
    this.router.navigate(['/']);
  }
}
