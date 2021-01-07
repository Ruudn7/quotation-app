import { Component } from '@angular/core';

import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0
  };

  addQutation(): void {
    this.quotes.unshift(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0
    };
  }

  addVote(quotation: Quotation, value: number): void {
    quotation.votes += value;
  }

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  bestQuotes(): Quotation[] {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes(): Quotation[] {
    return this.quotes.filter(q => q.votes < 0);
  }
}
