import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { onEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { ReactWrapperComponent } from '@shell/core';
import { StatementWrapperComponent } from '../../core/statement-wrapper/statement-wrapper.component';

@Component({
  selector: 'app-home',
  imports: [ReactWrapperComponent, DatePipe, CommonModule, StatementWrapperComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // TODO: alterar nome do usuario, (split no email)
  user = 'Maria';
  dateToday = new Date();
  toggleVisibility = true;
  balance = signal(0);

  ngOnInit() {
    this.initialLoading();
  }

  initialLoading() {
    onEvent('balance-updated', (balance) => this.balance.set(balance));
  }
}
