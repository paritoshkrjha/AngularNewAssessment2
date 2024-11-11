import { Component, Input } from '@angular/core';
import { Book } from '../books.model';
import { AuthService } from '../../auth/auth.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
})
export class BookItemComponent {
  @Input({
    required: true,
  })
  book!: Book;

  constructor(
    private authService: AuthService,
    private bookService: BooksService
  ) {}

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  get isBookAvailable(): boolean {
    return this.book.available;
  }

  get currentUserName() {
    return this.authService.getUserName();
  }

  handleCheckout(): void {
    this.bookService.updateBookAvailability(
      this.authService.getUserName(),
      this.book.id
    );
  }

  handleReturn(): void {
    this.bookService.updateBookAvailability(
      this.authService.getUserName(),
      this.book.id
    );
  }
}
