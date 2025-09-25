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

export const BLOG_FORM_FIELDS = [
  {
    component: "input",
    name: "title",
    placeholder: "Title",
    maxLength: 50,
  },
  {
    component: "input",
    name: "authorName",
    placeholder: "Author",
    maxLength: 50,
  },
  {
    component: "input",
    name: "authorEmail",
    placeholder: "Author Email",
    type: "email",
  },
  {
    component: "input",
    name: "date",
    placeholder: "Date",
    type: "date",
    className: "border p-2 rounded-lg bg-white text-black",
  },
  {
    component: "textarea",
    name: "summary",
    placeholder: "Summary",
    maxLength: 250,
  },
  {
    component: "textarea",
    name: "content",
    placeholder: "Content",
  },
];
