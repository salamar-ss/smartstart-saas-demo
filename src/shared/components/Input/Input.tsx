type InputProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  error?: string;
  placeholder?: string;
  registerProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

function Input({ label, name, type = "text", error, placeholder, registerProps }: InputProps) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>

      <input id={name} className="input__field" type={type} placeholder={placeholder} {...registerProps} />

      {error && <p className="input__error">{error}</p>}
    </div>
  );
}

export default Input;