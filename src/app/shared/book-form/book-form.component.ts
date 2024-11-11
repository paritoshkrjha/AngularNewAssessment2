import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Book } from '../../books/books.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  @Input() bookForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
    }),
    author: new FormControl('', {
      validators: [Validators.required],
    }),
    ISBN: new FormControl(null, {
      validators: [Validators.required],
    }),
  });

  @Output() formValues = new EventEmitter<Book>();
  submitted = false;

  get isTitleInvalid() {
    return (
      (this.bookForm.controls['title'].touched || this.submitted) &&
      this.bookForm.controls['title'].errors?.['required']
    );
  }

  get isAuthorInvalid() {
    return (
      (this.bookForm.controls['author'].touched || this.submitted) &&
      this.bookForm.controls['author'].errors?.['required']
    );
  }

  get isISBNInvalid() {
    return (
      (this.bookForm.controls['ISBN'].touched || this.submitted) &&
      this.bookForm.controls['ISBN'].errors?.['required']
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.invalid) {
      console.warn('Invalid form');
      return;
    }
    console.warn(this.bookForm.value);
    const id = Math.random().toString();
    const book: Book = {
      id,
      title: this.bookForm.value.title!,
      author: this.bookForm.value.author!,
      ISBN: this.bookForm.value.ISBN!,
      issuedByUser: null,
      available: true,
    };
    this.formValues.emit(book);
  }
}
