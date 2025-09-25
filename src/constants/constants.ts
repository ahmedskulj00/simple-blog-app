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
    placeholder: "Enter blog title",
    maxLength: 50,
    label: "Blog Title",
  },
  {
    component: Component.Input,
    name: "authorName",
    placeholder: "Enter author name",
    maxLength: 40,
    label: "Author Name",
  },
  {
    component: Component.Input,
    name: "authorEmail",
    placeholder: "Enter author email",
    type: "email",
    label: "Author Email",
  },
  {
    component: Component.Input,
    name: "date",
    placeholder: "Enter date",
    type: "date",
    className: "border p-2 rounded-lg bg-white text-black",
    label: "Blog Date",
  },
  {
    component: Component.TextArea,
    name: "summary",
    placeholder: "Enter blog summary",
    maxLength: 250,
    label: "Blog Summary",
  },
  {
    component: Component.TextArea,
    name: "content",
    placeholder: "Enter blog content",
    label: "Blog Content",
  },
];

export const LOCAL_STORAGE_KEY = "BLOGS";
