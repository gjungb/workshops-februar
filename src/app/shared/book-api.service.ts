import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Book[]> {
    const api$ = this.http.get<Book[]>('http://localhost:4730/books');

    return api$.pipe(
      catchError((err) => {
        console.log(err);
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
        ]);
      }),
      tap((value) => console.log(value))
    );
  }
}

/**
 *
 */
