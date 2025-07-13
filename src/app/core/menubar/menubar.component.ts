import { Component, effect, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { emitEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  imports: [
    MenubarModule,
    AvatarModule,
    Ripple,
    CommonModule,
    RouterModule,
    // TODO: REMOVER
    InputTextModule,
    FloatLabel,
    FormsModule,
    // FIM TODO
  ],
})
export class MenubarComponent {
  readonly menus: MenuItem[] = [
    { label: 'Início', routerLink: '' },
    { label: 'Categorias', routerLink: '/categorias' },
    { label: 'Transferências', routerLink: '/transacoes' },
    { label: 'Investimentos' },
  ];
  // TODO: REMOVER
  jwtToken = model('');
  jwtTokenEffect = effect(() => {
    const token = this.jwtToken();
    emitEvent('jwtToken', token);
  });
  // FIM TODO
}
