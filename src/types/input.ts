export type InputFieldProps = {
  label?: string;
  name: string;
  value: string;
  type?: 'text' | 'email' | 'radio' | 'date';
  placeholder?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>; 
  error?:string;
};