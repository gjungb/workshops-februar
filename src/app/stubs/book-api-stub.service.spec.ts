import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { BookApiStubService } from './book-api-stub.service';

fdescribe('BookApiStubService', () => {
  let service: BookApiStubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookApiStubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadAll()', () => {
    it('should return an observable with a non empty list', (done) => {
      const res$ = service.getAll();

      expect(res$).toBeInstanceOf(Observable);

      res$.subscribe((books) => {
        expect(books.length).toBeGreaterThan(0);
        done();
      });
    });
  });
});
