export interface IComment {
  id?: string;
  title: string;
  content: string;
}

export interface IMockComment extends IComment {
  bookID: string;
}
