/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-statement',
  standalone: true,
  imports: [CommonModule, DataViewModule, TagModule],
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent {
  transactions = signal<any>([
    { id: 1, type: 'Receita', value: 100, category: 'Salário', date: new Date(2025, 6, 13) },
    { id: 2, type: 'Despesa', value: 200, category: 'Alimentação', date: new Date(2025, 6, 13) },
    { id: 3, type: 'Receita', value: 300, category: 'Proventos', date: new Date(2025, 6, 13) },
    { id: 3, type: 'Receita', value: 300, category: 'Proventos', date: new Date(2025, 6, 13) },
    { id: 3, type: 'Receita', value: 300, category: 'Proventos', date: new Date(2025, 6, 13) },
  ]);
}
