import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ButtonModule, LoginComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  openModalLogin = false;

  closeLogin() {
    this.openModalLogin = !this.openModalLogin;
  }
}
