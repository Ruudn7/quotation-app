import { Component, Input } from '@angular/core';

import { Quotation } from './../models/quotation';

@Component({
  selector: 'app-qutes-list',
  templateUrl: './qutes-list.component.html',
  styleUrls: ['./qutes-list.component.scss']
})
export class QutesListComponent {

  @Input() quotes: Quotation[] = [];

  addVote(quotation: Quotation, value: number): void {
    quotation.votes += value;
  }

}
