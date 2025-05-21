import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-top-list-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  templateUrl: './top-list-editor.component.html',
  styleUrls: ['./top-list-editor.component.scss']
})
export class TopListEditorComponent {
  @Input() items: any[] = [];
  @Output() save = new EventEmitter<any[]>();
  @Output() cancel = new EventEmitter<void>();

  editedItems: any[] = [];

  ngOnInit() {
    // Másolat készítése a szerkesztéshez
    this.editedItems = JSON.parse(JSON.stringify(this.items));
  }

  addItem() {
    this.editedItems.push({
      id: Date.now().toString(),
      title: '',
      rank: this.editedItems.length + 1
    });
  }

  removeItem(index: number) {
    this.editedItems.splice(index, 1);
    this.updateRanks();
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.editedItems, event.previousIndex, event.currentIndex);
    this.updateRanks();
  }

  updateRanks() {
    this.editedItems.forEach((item, index) => {
      item.rank = index + 1;
    });
  }

  onSave() {
    this.save.emit(this.editedItems);
  }

  onCancel() {
    this.cancel.emit();
  }
}
