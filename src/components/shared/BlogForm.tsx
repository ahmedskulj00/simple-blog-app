import React, { useState } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";
import { BLOG_FORM_FIELDS } from "@/constants/constants";
import { Component, FormFields } from "@/types/types";

interface BlogFormProps {
  onSubmit: (blog: FormFields) => void;
  initial?: FormFields;
}

const BlogForm = ({ onSubmit, initial }: BlogFormProps) => {
  const [form, setForm] = useState<FormFields>({
    title: initial?.title || "",
    content: initial?.content || "",
    summary: initial?.summary || "",
    authorName: initial?.authorName || "",
    authorEmail: initial?.authorEmail || "",
    date: initial?.date || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      className="flex justify-center items-center flex-col gap-10"
      onSubmit={handleSubmit}
    >
      {BLOG_FORM_FIELDS.map((field) =>
        field.component === Component.Input ? (
          <InputField
            key={field.name}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`border p-2 rounded-lg ${field.className}`}
            required
            type={field.type || "text"}
            maxLength={field.maxLength}
          />
        ) : (
          <TextArea
            key={field.name}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`border p-2 rounded-lg h-32 ${field.className}`}
            required
            maxLength={field.maxLength}
          />
        )
      )}
      <Button>Submit</Button>
    </form>
  );
};

export default BlogForm;
