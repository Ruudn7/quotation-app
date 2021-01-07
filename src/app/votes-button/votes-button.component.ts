import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-votes-button',
  templateUrl: './votes-button.component.html',
  styleUrls: ['./votes-button.component.scss']
})
export class VotesButtonComponent {

  @Output() voteAdded = new EventEmitter<number>();
  @Input() votes = 0;

}
