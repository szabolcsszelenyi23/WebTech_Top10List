import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule, MatIconModule],
  templateUrl: './list-selector.component.html',
  styleUrls: ['./list-selector.component.scss']
})
export class ListSelectorComponent {
  @Input() categories: string[] = [];
  @Input() lists: { [key: string]: any[] } = {};

  @Output() categoryChanged = new EventEmitter<string>();
  @Output() listSelected = new EventEmitter<any>();

  activeCategory: string = '';
  selectedListId: string | null = null;

  ngOnInit() {
    if (this.categories.length > 0) {
      this.activeCategory = this.categories[0];
    }
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.selectedListId = null;
    this.categoryChanged.emit(category);
  }

  selectList(list: any) {
    this.selectedListId = list.id;
    this.listSelected.emit(list);
  }

  get currentLists() {
    return this.lists[this.activeCategory as keyof typeof this.lists] || [];
  }
}
