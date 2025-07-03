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
    {
      label: 'Angular',
      icon: 'pi pi-palette',
      route: '/angular',
    },
    {
      label: 'Angular 2',
      icon: 'pi pi-palette',
      route: '/angular/home2',
    },
    {
      label: 'React',
      icon: 'pi pi-palette',
      route: '/react',
    },
  ];
}
