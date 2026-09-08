type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
};

function Button({ children, type = "button", variant = "primary", disabled = false, onClick }: ButtonProps) {
  return (
    <button className={`button button--${variant}`} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;