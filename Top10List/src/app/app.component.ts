import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTopListComponent } from './components/new-top-list/new-top-list.component';
import { TopList } from './models/list.model';
import { TopListEditorComponent } from './components/top-list-editor/top-list-editor.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NewTopListComponent,
    TopListEditorComponent,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Toplista Készítő';
  createdLists: TopList[] = [];
  selectedList: TopList | null = null;

  categories: string[] = ['Filmek', 'Zenék', 'Sorozatok'];
  selectedCategory: string | null = null;
  showNewListCreator = false;

  ngOnInit() {
    const saved = localStorage.getItem('topLists');
    if (saved) {
      this.createdLists = JSON.parse(saved);
    }
  }

  onNewListCreated(newList: TopList) {
    this.createdLists.push(newList);
    localStorage.setItem('topLists', JSON.stringify(this.createdLists));
    this.showNewListCreator = false;
  }

  editList(list: TopList) {
    this.selectedList = JSON.parse(JSON.stringify(list));
  }

  onListSave(edited: TopList) {
    const idx = this.createdLists.findIndex(l => l.id === edited.id);
    if (idx !== -1) {
      this.createdLists[idx] = edited;
      localStorage.setItem('topLists', JSON.stringify(this.createdLists));
    }
    this.selectedList = null;
  }

  onEditCancel() {
    this.selectedList = null;
  }

  get filteredLists(): TopList[] {
    if (!this.selectedCategory) return this.createdLists;
    return this.createdLists.filter(list => list.type === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  showAllCategories() {
    this.selectedCategory = null;
  }

  showNewList() {
    this.showNewListCreator = true;
    this.selectedList = null;
  }

  deleteList(list: TopList) {
    this.createdLists = this.createdLists.filter(l => l.id !== list.id);
    localStorage.setItem('topLists', JSON.stringify(this.createdLists));
  }
}
