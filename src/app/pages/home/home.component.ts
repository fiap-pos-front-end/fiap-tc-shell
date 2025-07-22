/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { EVENTS, TransactionDTO, emitEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { ReactWrapperComponent } from '@shell/core';
import { finalize } from 'rxjs';
import { TransactionService } from '../../shared/services/transaction/transaction.service';
import { StatementWrapperComponent } from '../../core/statement-wrapper/statement-wrapper.component';

@Component({
  selector: 'app-home',
  imports: [ReactWrapperComponent, DatePipe, CommonModule, StatementWrapperComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly transactionService = inject(TransactionService);
  user = 'Maria';
  dateToday = new Date();
  toggleVisibility = true;
  isLoading = true;
  balance = signal(0);
  transactions = signal([]);

  ngOnInit() {
    this.initialLoading();
  }
  initialLoading() {
    this.getAllTransactions();
  }

  private getAllTransactions() {
    this.transactionService
      .getAll()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((transactions: any) => {
        const order = transactions.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

        emitEvent(EVENTS.TRANSACTIONS_UPDATED, order);
        this.transactions.set(order);
        this.balance.set(this.calculateBalance(this.transactions()));
      });
  }

  private calculateBalance(transactions: TransactionDTO[]): number {
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 'RECEITA') {
        return acc + transaction.amount;
      }

      return acc - transaction.amount;
    }, 0);
  }
}
