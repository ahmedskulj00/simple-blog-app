interface TextAreaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  labelName: string;
  className?: string;
  required?: boolean;
  maxLength?: number;
}

const TextArea = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  labelName,
  className,
  required,
  maxLength,
}: TextAreaProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-medium text-white">
        {labelName}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} outline-none p-2 border border-gray-50/20`}
        required={required}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextArea;
