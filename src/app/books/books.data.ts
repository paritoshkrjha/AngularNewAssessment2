import { Book } from './books.model';

const DUMMY_BOOKS: Book[] = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    ISBN: '978-0-06-112008-4',
    available: true,
    issuedByUser: null,
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    ISBN: '978-0-452-28423-4',
    available: true,
    issuedByUser: null,
  },
  {
    id: '3',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    ISBN: '978-0-7432-7356-5',
    available: true,
    issuedByUser: null,
  },
  {
    id: '4',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    ISBN: '978-0-316-76948-0',
    available: true,
    issuedByUser: null,
  },
  {
    id: '5',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    ISBN: '978-0-19-953556-9',
    available: true,
    issuedByUser: null,
  },
];

export default DUMMY_BOOKS;
