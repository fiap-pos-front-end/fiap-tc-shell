import { Component, effect, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { Ripple } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { emitEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';

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
})
export class MenubarComponent {
  readonly logoutMenu: MenuItem[] = [{ label: 'Sair', routerLink: '', icon: 'pi pi-sign-out' }];
  readonly menus: MenuItem[] = [
    { label: 'Início', routerLink: '', icon: 'pi pi-home' },
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
