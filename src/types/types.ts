export enum ButtonType {
  Submit = "submit",
  Reset = "reset",
  Button = "button",
}

export interface Blog {
  id: string;
  title: string;
  authorName: string;
  authorEmail: string;
  date: string;
  summary: string;
  content: string;
}
