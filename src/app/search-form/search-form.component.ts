import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'wsf-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;

  min = 2;

  term = 'Moby';

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      term: new FormControl(this.term, [
        Validators.required,
        Validators.minLength(this.min),
      ]),
    });

    const input$ = this.form.get('term').valueChanges;

    input$
      .pipe(
        debounceTime(300),
        tap((v) => console.log(v))
      )
      .subscribe();
  }

  updateSearchTerm(value: object): void {
    console.log(value);
  }
}
