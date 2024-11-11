import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MyBooksComponent } from './books/my-books/my-books.component';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { EditBooksComponent } from './books/edit-books/edit-books.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
    children: [
      {
        path: '',
        component: AllBooksComponent,
      },
      {
        path: 'my-books',
        component: MyBooksComponent,
      },
      {
        path: 'add',
        component: AddBooksComponent,
        canActivate: [authGuard],
        data: {
          role: 'LIBRARIAN',
        },
      },
      {
        path: 'edit/:id',
        component: EditBooksComponent,
        canActivate: [authGuard],
        data: {
          role: 'LIBRARIAN',
        },
      },
    ],
  },
];
