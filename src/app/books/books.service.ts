import { Injectable } from '@angular/core';
import DUMMY_BOOKS from './books.data';
import { Book } from './books.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books = DUMMY_BOOKS;
  myBooks: Book[] = [];

  constructor(private authService: AuthService) {
    const books = this.getBooksFromLocalStorage();
    const myBooks = this.getUserBooksFromLocalStorage(
      this.authService.getUserId()
    );
    if (books) {
      this.books = books;
    }
    if (myBooks) {
      this.myBooks = myBooks;
    }
  }

  saveBooksToLocalStorage(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  saveUserBooksToLocalStorage(userId: string): void {
    localStorage.setItem(userId, JSON.stringify(this.myBooks));
  }

  getBooksFromLocalStorage(): Book[] | undefined {
    if (!localStorage.getItem('books')) {
      return;
    }
    return JSON.parse(localStorage.getItem('books')!);
  }

  getUserBooksFromLocalStorage(userId: string): Book[] {
    if (!localStorage.getItem(userId)) {
      return [];
    }
    return JSON.parse(localStorage.getItem(userId)!);
  }

  updateBookAvailability(userName: string, bookId: string): void {
    const book = this.books.find((b) => b.id === bookId);
    if (!book) {
      return;
    }
    if (book.available) {
      book.available = false;
      book.issuedByUser = userName;
      this.myBooks.push(book);
    } else {
      book.available = true;
      book.issuedByUser = null;
      this.myBooks = this.myBooks.filter((b) => b.id !== bookId);
    }
    this.saveBooksToLocalStorage();
    this.saveUserBooksToLocalStorage(this.authService.getUserId());
  }

  getAllBooks(): Book[] {
    return this.books;
  }

  getMyBooks(): Book[] {
    return this.myBooks;
  }
}
