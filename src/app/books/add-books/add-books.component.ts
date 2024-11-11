import { Component } from '@angular/core';
import { BookFormComponent } from '../../shared/book-form/book-form.component';
import { Book } from '../books.model';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [BookFormComponent],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css',
})
export class AddBooksComponent {
  constructor(private bookService: BooksService, private router: Router) {}
  onSubmit(book: Book) {
    this.bookService.addBook(book);
    this.router.navigate(['']);
  }
}
