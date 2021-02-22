import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'wsf-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('wsfBook')
  content: Book;

  @Output()
  detailClick = new EventEmitter<Book>();

  customStyle = {
    color: 'goldenrod',
    backgroundColor: '#fcd'
  };

  start = 0;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Reagiert auf den Klick auf den Details Button
   */
  handleDetailClick(evt: MouseEvent): void {
    this.detailClick.emit(this.content);
  }

}
