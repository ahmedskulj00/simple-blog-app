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

export enum Component {
  Input = "input",
  TextArea = "textarea",
}

export type FormFields = Omit<Blog, "id">;

export type FieldName = keyof FormFields;

export interface FieldConfig {
  component: Component;
  name: FieldName;
  placeholder: string;
  className?: string;
  type?: string;
  maxLength?: number;
}
