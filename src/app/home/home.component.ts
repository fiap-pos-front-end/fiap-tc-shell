import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactWrapperComponent } from '@shell/core';
import { onEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { StatementComponent } from './statement/statement.component';

@Component({
  selector: 'app-home',
  imports: [ReactWrapperComponent, DatePipe, CommonModule, StatementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user = 'Maria';
  dateToday = new Date();
  toggleVisibility = true;
  balance = 0;

  ngOnInit(): void {
    onEvent('balanceChange', (val) => (this.balance = val));
  }
}
