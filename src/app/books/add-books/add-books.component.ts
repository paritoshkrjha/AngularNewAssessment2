import { Component } from '@angular/core';
import { BookFormComponent } from "../../shared/book-form/book-form.component";

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [BookFormComponent],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css',
})
export class AddBooksComponent {}
