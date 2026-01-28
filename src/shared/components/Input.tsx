type InputFieldProps = {
  label?: string;
  name: string;
  value: string;
  type?: 'text' | 'email' | 'radio' | 'date';
  placeholder?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  max?: string;
};

const InputField = ({
  label,
  name,
  value,
  type = 'text',
  placeholder,
  onChange,
  onBlur,
  error,
  max,
}: InputFieldProps) => {
  return (
    <div className={`form-group ${error ? 'error-field' : ''}`}>
      {label && (
        <label htmlFor={name}>
          {label} <span className="required">*</span>
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        max={max}
      />

      {error && <small className="error show">{error}</small>}
    </div>
  );
};

export default InputField;
