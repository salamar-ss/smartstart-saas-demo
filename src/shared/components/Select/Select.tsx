type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  name: string;
  options: SelectOption[];
  error?: string;
  registerProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
};

function Select({ label, name, options, error, registerProps }: SelectProps) {
  return (
    <div className="select">
      <label className="select__label" htmlFor={name}>
        {label}
      </label>

      <select id={name} className="select__field" {...registerProps}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="select__error">{error}</p>}
    </div>
  );
}

export default Select;