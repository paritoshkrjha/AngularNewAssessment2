import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { BookItemComponent } from '../book-item/book-item.component';

@Component({
  selector: 'app-my-books',
  standalone: true,
  imports: [BookItemComponent],
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.css',
})
export class MyBooksComponent {
  constructor(private bookService: BooksService) {}

  get myBooks() {
    console.log('here');
    return this.bookService.getMyBooks();
  }
}
