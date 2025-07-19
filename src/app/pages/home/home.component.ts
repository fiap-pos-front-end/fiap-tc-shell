import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { EVENTS, TransactionDTO, getLastEvent } from '@fiap-pos-front-end/fiap-tc-shared';
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
})
export class HomeComponent implements OnInit {
  user = 'Maria';
  dateToday = new Date();
  toggleVisibility = true;

  balance = signal(0);
  transactions = signal<TransactionDTO[]>([]);

  ngOnInit() {
    const transactionsReceived = getLastEvent(EVENTS.TRANSACTIONS_UPDATED);
    this.transactions.set(this.mapTransactionsToViewModel(transactionsReceived));
    this.balance.set(this.calculateBalance(this.transactions()));
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  private mapTransactionsToViewModel(transactions: any[]): TransactionDTO[] {
    return (transactions || []).map((transaction) => ({
      amount: transaction.amount.amount,
      category: transaction.category,
      date: new Date(transaction.date),
      id: parseInt(transaction.id),
      type: transaction.type,
    }));
  }

  private calculateBalance(transactions: TransactionDTO[]): number {
    // TODO: melhorar a tipagem quando estiver no /shared
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 'Receita') {
        return acc + transaction.amount;
      }

      return acc - transaction.amount;
    }, 0);
  }
}
