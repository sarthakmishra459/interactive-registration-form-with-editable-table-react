import type { InputFieldProps } from "../types/input";



const InputField = ({
  label,
  name,
  value,
  type = "text",
  placeholder,
  onChange,
  onBlur,
  error,
}: InputFieldProps) => {
  return (
    <div className={`form-group ${error ? "error-field" : ""}`}>
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
      />

      {error && <small className="error show">{error}</small>}
    </div>
  );
};

export default InputField;