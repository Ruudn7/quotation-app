import { Component } from '@angular/core';

import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  quotes: Quotation[] = QUOTES;

  addVote(quotation: Quotation, value: number): void {
    quotation.votes += value;
  }

  bestQuotes(): Quotation[] {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes(): Quotation[] {
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation: Quotation): void {
    this.quotes.unshift(quotation);
  }
}
