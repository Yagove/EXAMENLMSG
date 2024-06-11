import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: { name: string; surname: string; id: string; contactNumber: string; present?:boolean }[] = [];


  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  togglePresent(index: number) {
    this.items[index].present = !this.items[index].present;
  }


}

