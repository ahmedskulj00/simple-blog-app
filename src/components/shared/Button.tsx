import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
}

const Button = ({ children, type, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded cursor-pointer text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
