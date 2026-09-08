import Button from "@/shared/components/Button/Button";

type ErrorStateProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

function ErrorState({ title = "Something went wrong", message = "Please try again.", onRetry }: ErrorStateProps) {
  return (
    <div className="error-state">
      <h3 className="error-state__title">{title}</h3>
      <p className="error-state__message">{message}</p>

      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}

export default ErrorState;