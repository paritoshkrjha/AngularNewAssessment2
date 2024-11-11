import { Component, Input } from '@angular/core';
import { BooksService } from '../books.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book-details',
  standalone: true,
  imports: [],
  templateUrl: './view-book-details.component.html',
  styleUrl: './view-book-details.component.css',
})
export class ViewBookDetailsComponent {
  @Input() id!: string;
  constructor(
    private bookService: BooksService,
    private authService: AuthService,
    private router: Router
  ) {}

  get bookDetails() {
    return this.bookService.getAllBooks().find((book) => book.id === this.id);
  }

  get isBookAvailable() {
    return this.bookDetails?.available ? 'Available' : 'Not Available';
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }

  onDelete() {
    this.bookService.deleteBook(this.id);
    this.router.navigate(['']);
  }
}
