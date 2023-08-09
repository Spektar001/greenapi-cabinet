import { InputProps } from "../Types/types";
import "./Input.css";

export const Input = ({
  className,
  value,
  onChange,
  placeholder,
  type,
}: InputProps) => (
  <input
    value={value}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
    type={type}
  />
);
