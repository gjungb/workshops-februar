import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookApiStubService {

  constructor() { }

  getAll(): Observable<Book[]> {
    return of([
      {
        title: 'Moby Dick',
        author: 'Herman Melville',
      },
      {
        title: 'Harry Potter und der Feuerkelch',
        author: 'J.K. Rowling',
        abstract: 'Lorem ipsum...',
      },
    ]).pipe(delay(3000));
  }
}
