import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { EVENTS, onEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { ReactWrapperComponent, StatementWrapperComponent } from '@shell/presentation';
import { AuthStore } from '../../state/auth/auth.store';

@Component({
  selector: 'app-home',
  imports: [ReactWrapperComponent, DatePipe, CommonModule, StatementWrapperComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly authStore = inject(AuthStore);

  dateToday = new Date();
  toggleVisibility = true;

  userEmail = signal('');
  balance = signal(0);

  ngOnInit() {
    this.initialLoading();
    this.userEmail.set(this.authStore.getUserEmail().split('@')[0]);
  }

  initialLoading() {
    onEvent(EVENTS.BALANCE_UPDATED, (balance) => this.balance.set(balance));
  }
}
