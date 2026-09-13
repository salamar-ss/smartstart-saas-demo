import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import AppProviders from "@/app/providers/AppProviders";

import AppErrorBoundary from "@/shared/components/AppErrorBoundary/AppErrorBoundary";

import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <AppProviders>
        <App />
      </AppProviders>
    </AppErrorBoundary>
  </React.StrictMode>
);