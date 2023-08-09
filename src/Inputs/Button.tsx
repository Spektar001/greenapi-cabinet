import { ButtonProps } from "../Types/types";
import "./Button.css";

export const Button = ({ onClick, className, children }: ButtonProps) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);
