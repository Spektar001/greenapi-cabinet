export interface InputProps {
  className?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
}

export interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export interface MakeRequestProps {
  url: string;
  method: string;
  body?: object;
  setUseState: React.Dispatch<React.SetStateAction<string>>;
}
