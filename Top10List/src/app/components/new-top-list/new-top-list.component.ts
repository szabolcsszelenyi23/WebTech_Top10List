import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-top-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './new-top-list.component.html',
  styleUrls: ['./new-top-list.component.scss']
})
export class NewTopListComponent {
  @Output() listCreated = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  categories = ['Filmek', 'Zenék', 'Sorozatok', 'Egyéb'];
  newList: any = {
    title: '',
    category: 'Filmek',
    items: Array(10).fill(null).map((_, i) => ({
      rank: i + 1,
      title: '',
      subtitle: ''
    }))
  };

  // Dialog használata esetén
  constructor(public dialogRef: MatDialogRef<NewTopListComponent>) {}

  onSubmit() {
    const completeList = {
      ...this.newList,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.listCreated.emit(completeList);

    // Dialog használata esetén
    if (this.dialogRef) {
      this.dialogRef.close(completeList);
    }
  }

  onCancel() {
    this.cancel.emit();

    // Dialog használata esetén
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
