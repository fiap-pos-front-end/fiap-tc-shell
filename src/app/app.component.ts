import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fiap-tc-shell';
  items = [
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
