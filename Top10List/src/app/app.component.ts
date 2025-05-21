import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListItemComponent } from './components/list-items/list-items.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ListSelectorComponent } from './components/list-selector/list-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { NewTopListComponent } from './components/new-top-list/new-top-list.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ListSelectorComponent,
    ListItemComponent,
    RouterOutlet,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    NewTopListComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  categories = ['Filmek', 'Zenék', 'Sorozatok'];
  selectedList: any = null;

  // Példa adatok
  topLists = {
    'Filmek': [
      { id: 'films1', title: 'Legjobb filmek 2023', items: [
          { title: 'Oppenheimer', rank: 1 },
          { title: 'A szörny', rank: 2 },
          { title: 'Barbie', rank: 3 }
]},
      { id: 'films2', title: 'Mindent idők legjobb filmjei', items: [
        { title: 'A remény rabjai', rank: 1 },
          { title: 'A keresztapa', rank: 2 },
          { title: 'A sötét lovag', rank: 3 }
        ] }
    ],
    'Zenék': [
      { id: 'music1', title: 'Legjobb dalok 2023', items: [
        { title: 'Flowers - Miley Cyrus', rank: 1 },
          { title: 'Kill Bill - SZA', rank: 2 },
          { title: 'Anti-Hero - Taylor Swift', rank: 3 }
      ] },
      { id: 'music2', title: 'Örökzöld slágerek', items: [
        { title: 'Bohemian Rhapsody - Queen', rank: 1 },
          { title: 'Imagine - John Lennon', rank: 2 },
          { title: 'Hotel California - Eagles', rank: 3 }
      ] }
    ],
    'Sorozatok': [
      { id: 'series1', title: 'Legjobb sorozatok 2023', items: [
        { title: 'The Last of Us', rank: 1 },
          { title: 'Succession', rank: 2 },
          { title: 'The Bear', rank: 3 }
      ] },
      { id: 'series2', title: 'Legnépszerűbb sorozatok', items: [
        { title: 'Trónok harca', rank: 1 },
          { title: 'Breaking Bad', rank: 2 },
          { title: 'Stranger Things', rank: 3 }
      ] }
    ]
  };

  onListSelected(list: any) {
    this.selectedList = list;
  }

}
