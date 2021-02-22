import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor() { }

  loadAll(): Book[] {
    return [
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
  }
}
