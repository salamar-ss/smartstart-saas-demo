import Button from "@/shared/components/Button/Button";

type ErrorStateProps = {
  title?: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

function ErrorState({ title = "Something went wrong", message, actionLabel, onAction }: ErrorStateProps) {
  return (
    <div className="error-state">
      <h2 className="error-state__title">{title}</h2>
      <p className="error-state__message">{message}</p>

      {actionLabel && onAction && (
        <Button variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default ErrorState;