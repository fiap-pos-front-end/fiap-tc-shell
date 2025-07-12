import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  imports: [MenubarModule, AvatarModule, Ripple, CommonModule, RouterModule],
})
export class MenubarComponent {
  readonly menus: MenuItem[] = [
    { label: 'Início', routerLink: '' },
    { label: 'Categorias', routerLink: '/categorias' },
    { label: 'Transferências', routerLink: '/transacoes' },
    { label: 'Investimentos' },
  ];
}
