import { Component, FieldConfig } from "@/types/types";

export const HEADER_NAV_LINKS = [
  {
    id: crypto.randomUUID(),
    name: "Home",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    name: "Create",
    href: "/blog/create",
  },
];

export const BLOG_FORM_FIELDS: FieldConfig[] = [
  {
    component: Component.Input,
    name: "title",
    placeholder: "Title",
    maxLength: 50,
  },
  {
    component: Component.Input,
    name: "authorName",
    placeholder: "Author",
    maxLength: 50,
  },
  {
    component: Component.Input,
    name: "authorEmail",
    placeholder: "Author Email",
    type: "email",
  },
  {
    component: Component.Input,
    name: "date",
    placeholder: "Date",
    type: "date",
    className: "border p-2 rounded-lg bg-white text-black",
  },
  {
    component: Component.TextArea,
    name: "summary",
    placeholder: "Summary",
    maxLength: 250,
  },
  {
    component: Component.TextArea,
    name: "content",
    placeholder: "Content",
  },
];

export const LOCAL_STORAGE_KEY = "BLOGS";
