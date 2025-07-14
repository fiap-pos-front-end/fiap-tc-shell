import { CommonModule } from '@angular/common';
import { Component, effect, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { emitEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Menu, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  imports: [
    MenubarModule,
    AvatarModule,
    Ripple,
    CommonModule,
    RouterModule,
    MenuModule,
    Menu,
    // TODO: REMOVER
    InputTextModule,
    FloatLabel,
    FormsModule,
    // FIM TODO
  ],
  styles: `
    .p-menuitem-link-active {
      border-radius: 0.5rem;
      color: var(--p-menubar-item-focus-color);
      background: var(--p-menubar-item-focus-background);
    }
  `,
})
export class MenubarComponent {
  readonly logoutMenu: MenuItem[] = [{ label: 'Sair', routerLink: '', icon: 'pi pi-sign-out' }];
  readonly menus: MenuItem[] = [
    { label: 'Início', routerLink: '', icon: 'pi pi-home', routerLinkActiveOptions: { exact: true } },
    { label: 'Categorias', routerLink: '/categorias', icon: 'pi pi-tags' },
    { label: 'Transferências', routerLink: '/transferencias', icon: 'pi pi-money-bill' },
  ];

  // TODO: REMOVER
  jwtToken = model('');
  jwtTokenEffect = effect(() => {
    const token = this.jwtToken();
    emitEvent('jwtToken', token);
  });
  // FIM TODO
}
