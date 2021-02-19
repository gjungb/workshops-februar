import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'wsf-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Array<Book> = [
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
    },
    {
      title: 'Harry Potter und der Feuerkelch',
      author: 'J.K. Rowling',
      abstract: 'Lorem ipsum...',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  log(evt: Book): void {
    console.log(evt.title);
  }
}
