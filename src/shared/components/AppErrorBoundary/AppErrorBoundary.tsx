import { ErrorBoundary } from "react-error-boundary";

import ErrorState from "@/shared/components/ErrorState/ErrorState";

type AppErrorBoundaryProps = {
  children: React.ReactNode;
};

function AppErrorFallback() {
  return (
    <ErrorState
      title="Application error"
      message="Something unexpected happened. Please refresh the page."
      actionLabel="Refresh"
      onAction={() => window.location.reload()}
    />
  );
}

function AppErrorBoundary({ children }: AppErrorBoundaryProps) {
  return <ErrorBoundary FallbackComponent={AppErrorFallback}>{children}</ErrorBoundary>;
}

export default AppErrorBoundary;