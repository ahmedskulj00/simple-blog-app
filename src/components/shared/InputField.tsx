interface InputFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  labelName: string;
  className?: string;
  required?: boolean;
  type?: string;
  maxLength?: number;
}

const InputField = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  labelName,
  className,
  required,
  type,
  maxLength,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium text-white mb-1">
        {labelName}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        required={required}
        type={type}
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputField;
