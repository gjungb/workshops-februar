import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({
  name: 'wsfBookFilter',
})
export class BookFilterPipe implements PipeTransform {
  /**
   * value Eine Liste von Büchern
   * search ...
   */
  transform(value: null | Book[], search = ''): Book[] {
    return value ? value.filter((book) => book.title.startsWith(search)) : [];
  }
}
