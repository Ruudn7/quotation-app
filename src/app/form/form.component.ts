import { Component, EventEmitter, Input, Output } from '@angular/core';

import { QUOTES } from './../models/database';
import { Quotation } from './../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  showForm = false;
  @Output() newQuotation = new EventEmitter<Quotation>();
  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0
  };

  addQutation(): void {
    this.newQuotation.emit(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0
    };
  }

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}
