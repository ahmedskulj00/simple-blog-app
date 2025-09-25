import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";
import { BLOG_FORM_FIELDS } from "@/constants/constants";

const BlogForm = () => {
  return (
    <form className="flex justify-center items-center flex-col gap-10">
      {BLOG_FORM_FIELDS.map((field) =>
        field.component === "input" ? (
          <InputField
            key={field.name}
            name={field.name}
            value=""
            onChange={(e) => console.log(e)}
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
            value=""
            onChange={(e) => console.log(e)}
            placeholder={field.placeholder}
            className={`border p-2 rounded-lg h-32 ${field.className}`}
            required
            maxLength={field.maxLength}
          />
        )
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BlogForm;
