import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'wsf-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Array<Book>;

  term = '';

  constructor(private readonly api: BookApiService) {}

  ngOnInit(): void {
    this.books = this.api.loadAll();
  }

  updateSearchTerm(evt: Event): void {
    this.term = (evt.target as HTMLInputElement).value;
  }

  log(evt: Book): void {
    console.log(evt.title);
  }
}
