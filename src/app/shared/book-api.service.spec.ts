import { TestBed } from '@angular/core/testing';

import { BookApiService } from './book-api.service';

fdescribe('BookApiService', () => {
  let service: BookApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadAll()', () => {
    it('should be defined', () => {
      expect(service.loadAll).toBeDefined();
    });
  });
});
