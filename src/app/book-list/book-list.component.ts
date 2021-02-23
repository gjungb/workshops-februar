import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'wsf-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
/**
 * Stateful / Smart Component
 */
export class BookListComponent implements OnInit, OnDestroy {
  books: Array<Book> = [];

  books$: Observable<Book[]>;

  ticker$: Observable<number>;

  term = '';

  private sub: Subscription;

  constructor(private readonly api: BookApiService) {}

  ngOnInit(): void {
    this.books$ = this.api.loadAll();

    // books$.pipe().subscribe({
    //   next: (value) => {
    //     this.books = value;
    //   },
    //   error: (err) => {},
    //   complete: () => {}
    // });

    // takeUntil
    this.ticker$ = timer(5000, 1000).pipe(
      filter((t) => t % 2 === 0),
      tap((t) => console.log(t))
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  updateSearchTerm(evt: Event): void {
    this.term = (evt.target as HTMLInputElement).value;
  }

  log(evt: Book): void {
    console.log(evt.title);
  }
}
