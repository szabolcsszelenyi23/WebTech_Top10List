import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { TopList, TopListItemType } from '../../models/list.model';

@Component({
  selector: 'app-new-top-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './new-top-list.component.html',
  styleUrls: ['./new-top-list.component.scss']
})
export class NewTopListComponent implements OnInit {
  newListTitle: string = '';
  selectedType: TopListItemType = 'film';
  submitted: boolean = false;

  itemTypes: TopListItemType[] = ['film', 'zene', 'sorozat'];
  itemValues: string[] = Array(10).fill('');

  @Output() listCreated = new EventEmitter<TopList>();

  constructor() { }

  ngOnInit() {
    // No editing logic needed here
  }

  createList(): void {
    this.submitted = true;
    if (this.newListTitle.trim() && this.itemValues.every(val => val.trim() !== '')) {
      const newToplist: TopList = {
        id: Date.now().toString(),
        title: this.newListTitle.trim(),
        type: this.selectedType,
        items: this.itemValues.map((val, idx) => ({
          id: (idx + 1).toString(),
          title: `Elem ${idx + 1}`,
          value: val.trim()
        }))
      };
      this.saveList(newToplist);
      this.listCreated.emit(newToplist);
      this.newListTitle = '';
      this.selectedType = 'film';
      this.itemValues = Array(10).fill('');
      this.submitted = false;
    }
  }

  saveList(list: TopList): void {
    const existing = JSON.parse(localStorage.getItem('topLists') || '[]');
    existing.push(list);
    localStorage.setItem('topLists', JSON.stringify(existing));
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}