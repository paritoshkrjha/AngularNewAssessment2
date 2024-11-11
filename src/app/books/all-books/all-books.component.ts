import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../books.model';
import { BookItemComponent } from "../book-item/book-item.component";

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [BookItemComponent],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent {
  constructor(private bookService: BooksService) {}

  get books(): Book[] {
    return this.bookService.getAllBooks();
  }
}
