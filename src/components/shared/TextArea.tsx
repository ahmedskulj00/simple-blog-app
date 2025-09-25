interface TextAreaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  className?: string;
  required?: boolean;
  maxLength?: number;
}

const TextArea = ({
  name,
  value,
  onChange,
  placeholder,
  className,
  required,
  maxLength,
}: TextAreaProps) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required={required}
      maxLength={maxLength}
    />
  );
};

export default TextArea;
