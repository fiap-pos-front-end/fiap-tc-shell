import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { getLastEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { ReactWrapperComponent } from '@shell/core';
import { StatementComponent } from './statement/statement.component';

export type Transaction = {
  id: number;
  type: string;
  amount: number;
  category: string;
  date: Date;
};

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

  balance = signal(0);
  transactions = signal<Transaction[]>([]);

  ngOnInit() {
    const transactionsReceived = getLastEvent('transactions-updated');
    this.transactions.set(this.mapTransactionsToViewModel(transactionsReceived));
    this.balance.set(this.calculateBalance(this.transactions()));
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  private mapTransactionsToViewModel(transactions: any[]): Transaction[] {
    return (transactions || []).map((transaction) => ({
      amount: transaction.amount.amount,
      category: transaction.category,
      date: new Date(transaction.date),
      id: parseInt(transaction.id),
      type: transaction.type,
    }));
  }

  private calculateBalance(transactions: Transaction[]): number {
    // TODO: melhorar a tipagem quando estiver no /shared
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 'Receita') {
        return acc + transaction.amount;
      }

      return acc - transaction.amount;
    }, 0);
  }
}
