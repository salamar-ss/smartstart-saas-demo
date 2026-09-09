type TextareaProps = {
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
  registerProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

function Textarea({ label, name, error, placeholder, registerProps }: TextareaProps) {
  return (
    <div className="textarea">
      <label className="textarea__label" htmlFor={name}>
        {label}
      </label>

      <textarea id={name} className="textarea__field" placeholder={placeholder} {...registerProps} />

      {error && <p className="textarea__error">{error}</p>}
    </div>
  );
}

export default Textarea;