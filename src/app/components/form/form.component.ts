import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output() itemAdded = new EventEmitter<{ name: string; surname: string; id: string; contactNumber: string }>();
  
  name: string = '';
  surname: string = '';
  id: string = '';
  contactNumber: string = '';
  newItem: string = '';

  onSubmit() {
    const formData = {
      name: this.name,
      surname: this.surname,
      id: this.id,
      contactNumber: this.contactNumber
    };

    this.itemAdded.emit(formData);

    // Clear the form fields after submission
    this.name = '';
    this.surname = '';
    this.id = '';
    this.contactNumber = '';
  }
}

