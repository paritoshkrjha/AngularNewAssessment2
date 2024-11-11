import { type User } from '../app.model';

const users: User[] = [
  {
    id: '1',
    name: 'admin',
    email: 'admin@example.com',
    password: 'admin',
    role: 'LIBRARIAN',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
    role: 'MEMBER',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    password: 'password789',
    role: 'MEMBER',
  },
  {
    id: '4',
    name: 'user',
    email: 'user@example.com',
    password: 'user',
    role: 'MEMBER',
  },
];

export default users;
