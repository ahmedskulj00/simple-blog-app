interface InputFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  required?: boolean;
  type?: string;
  maxLength?: number;
}

const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  className,
  required,
  type,
  maxLength,
}: InputFieldProps) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required={required}
      type={type}
      maxLength={maxLength}
    />
  );
};

export default InputField;
