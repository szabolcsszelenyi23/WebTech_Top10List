import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { TopList, TopListItem } from '../../models/list.model';

@Component({
  selector: 'app-top-list-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    DragDropModule
  ],
  templateUrl: './top-list-editor.component.html',
  styleUrls: ['./top-list-editor.component.scss']
})
export class TopListEditorComponent implements OnInit, OnChanges {
  @Input() list: TopList | null = null;
  @Output() save = new EventEmitter<TopList>();
  @Output() cancel = new EventEmitter<void>();

  editedList: TopList = {
    id: '',
    title: '',
    type: '',
    items: []
  };

  categories: ('Filmek' | 'Zenék' | 'Sorozatok' | 'Egyéb')[] = [
    'Filmek', 'Zenék', 'Sorozatok', 'Egyéb'
  ];

  ngOnInit() {
    if (this.list) {
      this.editedList = JSON.parse(JSON.stringify(this.list));
      this.migrateItemValues();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['list'] && this.list) {
      this.editedList = JSON.parse(JSON.stringify(this.list));
      this.migrateItemValues();
    }
  }

  addItem() {
    this.editedList.items.push({
      id: this.generateId(),
      title: '',
      rank: this.editedList.items.length + 1
    });
  }

  removeItem(index: number) {
    this.editedList.items.splice(index, 1);
    this.updateRanks();
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.editedList.items, event.previousIndex, event.currentIndex);
    this.updateRanks();
  }

  updateRanks() {
    this.editedList.items.forEach((item, index) => {
      item.rank = index + 1;
    });
  }

  onSubmit() {
  if (!this.isFormValid()) return;
  this.editedList.items.forEach(item => {
    item.value = item.title;
  });
  const listToSave = {
    ...this.editedList,
    id: this.list?.id || this.generateId()
  };
  this.save.emit(listToSave);
}

  isFormValid(): boolean {
    return this.editedList.title.trim() !== '' &&
           this.editedList.items.every(item => item.title.trim() !== '');
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private migrateItemValues() {
  if (this.editedList && this.editedList.items) {
    this.editedList.items.forEach((item, idx) => {
      if ((!item.title || item.title === `Elem ${idx + 1}`) && item.value) {
        item.title = item.value;
      }
    });
  }
}
}
