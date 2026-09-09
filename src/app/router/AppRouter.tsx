import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardPage from "@/pages/DashboardPage/DashboardPage";
import GeneratorPage from "@/pages/GeneratorPage/GeneratorPage";
import HomePage from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";

import MainLayout from "@/shared/layouts/MainLayout/MainLayout";
import ProtectedLayout from "@/shared/layouts/ProtectedLayout/ProtectedLayout";
 
function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/generator" element={<GeneratorPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;