import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  imports: [MenubarModule, RouterModule],
})
export class MenubarComponent {
  readonly menus: MenuItem[] = [
    { label: 'Início' },
    { label: 'Categorias' },
    { label: 'Transferências' },
    { label: 'Investimentos' },
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
