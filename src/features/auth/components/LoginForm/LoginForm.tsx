import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { loginSchema, type LoginFormData } from "@/features/auth/schemas/authShemas";
import { loginUser } from "@/features/auth/services/authService";
import { useAuth } from "@/features/auth/hooks/useAuth";

import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formError, setFormError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormData) {
    try {
      setFormError("");

      const response = await loginUser(data);

      login(response.user, response.token);

      navigate("/dashboard");
    } catch {
      setFormError("Login failed. Please try again.");
    }
  }

  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <h1 className="auth-card__title">Login</h1>
        <p className="auth-card__text">Access your SmartStart dashboard.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email" name="email" type="email" placeholder="you@example.com" registerProps={register("email")} error={errors.email?.message} />

        <Input label="Password" name="password" type="password" placeholder="••••••••" registerProps={register("password")} error={errors.password?.message} />

        {formError && <p className="auth-form__message">{formError}</p>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>

      <p className="auth-card__footer">
        No account yet? <Link to="/register">Create one</Link>
      </p>
    </div>
  );
}

export default LoginForm;