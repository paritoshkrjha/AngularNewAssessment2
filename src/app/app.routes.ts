import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { EditBooksComponent } from './books/edit-books/edit-books.component';
import { ViewBookDetailsComponent } from './books/view-book-details/view-book-details.component';

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
        loadComponent: () =>
          import('./books/all-books/all-books.component').then(
            (m) => m.AllBooksComponent
          ),
      },
      {
        path: 'my-books',
        loadComponent: () =>
          import('./books/my-books/my-books.component').then(
            (M) => M.MyBooksComponent
          ),
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
        path: 'view/:id',
        component: ViewBookDetailsComponent,
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
