import React, { useState } from "react";
import InputField from "../shared/InputField";
import TextArea from "../shared/TextArea";
import Button from "../shared/Button";
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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.authorEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    onSubmit(form);
  };

  return (
    <form
      className="flex justify-center items-center flex-col gap-5 mb-10"
      onSubmit={handleSubmit}
    >
      {BLOG_FORM_FIELDS.map((field) => {
        const id = `field-${field.name}`;
        return field.component === Component.Input ? (
          <InputField
            key={field.name}
            id={id}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            labelName={field.label}
            className={`sm:w-[480px] w-full ${field.className}`}
            required
            type={field.type || "text"}
            maxLength={field.maxLength}
          />
        ) : (
          <TextArea
            key={id}
            id={id}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            labelName={field.label}
            className={`sm:w-[480px] w-full h-32 ${field.className}`}
            required
            maxLength={field.maxLength}
          />
        );
      })}

      {error && <p className="text-red-600">{error}</p>}
      <Button>Submit</Button>
    </form>
  );
};

export default BlogForm;
