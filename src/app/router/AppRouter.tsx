import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "@/shared/components/Loader/Loader";
import MainLayout from "@/shared/layouts/MainLayout/MainLayout";
import ProtectedLayout from "@/shared/layouts/ProtectedLayout/ProtectedLayout";

const DashboardPage = lazy(() => import("@/pages/DashboardPage/DashboardPage"));
const GeneratorPage = lazy(() => import("@/pages/GeneratorPage/GeneratorPage"));
const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));
const ProjectPreviewPage = lazy(() => import("@/pages/ProjectPreviewPage/ProjectPreviewPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage/RegisterPage"));
const TemplateDetailsPage = lazy(() => import("@/pages/TemplateDetailsPage/TemplateDetailsPage"));
const TemplatesPage = lazy(() => import("@/pages/TemplatesPage/TemplatesPage"));

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<Loader text="Loading page..." />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/templates/:id" element={<TemplateDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/generator" element={<GeneratorPage />} />
              <Route path="/projects/:id" element={<ProjectPreviewPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;