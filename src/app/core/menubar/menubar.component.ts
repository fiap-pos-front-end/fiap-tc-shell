import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  imports: [MenubarModule, AvatarModule, Ripple, CommonModule, RouterModule],
})
export class MenubarComponent {
  readonly menus: MenuItem[] = [
    { label: 'Início', routerLink: '' },
    { label: 'Categorias' },
    { label: 'Transferências', routerLink: '/transferencias' },
    { label: 'Investimentos' },
  ];
}
