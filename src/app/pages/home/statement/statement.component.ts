import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { Transaction } from '../home.component';

@Component({
  selector: 'app-statement',
  standalone: true,
  imports: [CommonModule, DataViewModule, TagModule],
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent {
  transactions = input.required<Transaction[]>();
}
