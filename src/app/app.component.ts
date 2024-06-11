import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./components/form/form.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, FormComponent, ListComponent]
})
export class AppComponent {
 items: {name: string; surname: string; id:string; contactNumber: string }[] = [];

 onItemAdded(newItem: { name: string; surname: string; id: string; contactNumber: string }) {
  this.items.push(newItem);
 }
}
