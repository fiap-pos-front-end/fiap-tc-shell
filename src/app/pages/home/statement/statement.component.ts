import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-statement',
  standalone: true,
  imports: [CommonModule, DataViewModule, TagModule],
  templateUrl: './statement.component.html',
})
export class StatementComponent {
  transactions = input([]);
}
