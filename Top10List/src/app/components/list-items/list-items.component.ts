import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemComponent {
  @Input() items: any[] = []; // Bármilyen típusú elemeket fogad
  @Input() listTitle: string = ''; // Opcionális lista címe
}
