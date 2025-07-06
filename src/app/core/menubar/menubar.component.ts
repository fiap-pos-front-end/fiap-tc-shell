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
    { label: 'Início' },
    { label: 'Transferências' },
    {
      label: 'Rotas',
      icon: 'pi pi-map',
      items: [
        {
          label: 'Angular',
          routerLink: '/angular',
        },
        {
          label: 'Angular 2',
          routerLink: '/angular/home2',
        },
        {
          label: 'React',
          routerLink: '/react',
        },
      ],
    },
  ];
}
