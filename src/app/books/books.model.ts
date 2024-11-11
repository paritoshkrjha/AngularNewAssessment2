export interface Book {
  id: string;
  title: string;
  author: string;
  ISBN: string;
  available: boolean;
  issuedByUser: string | null;
}
