import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactWrapperComponent } from '@shell/core';
import { getLastEvent, onEvent } from '@fiap-pos-front-end/fiap-tc-shared';

@Component({
  selector: 'app-home',
  imports: [ReactWrapperComponent, DatePipe, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user = 'Maria';
  dateToday = new Date();
  toggleVisibility = true;
  balance = 0;
  ngOnInit(): void {
    this.balance = getLastEvent('balanceChange') ?? 0;
    onEvent('balanceChange', console.log);
  }
}
