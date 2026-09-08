import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { registerSchema, type RegisterFormData } from "@/features/auth/schemas/authShemas";
import { registerUser } from "@/features/auth/services/authService";
import { useAuth } from "@/features/auth/hooks/useAuth";

import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";

function RegisterForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formError, setFormError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterFormData) {
    try {
      setFormError("");

      const response = await registerUser(data);

      login(response.user, response.token);

      navigate("/dashboard");
    } catch {
      setFormError("Registration failed. Please try again.");
    }
  }

  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <h1 className="auth-card__title">Create account</h1>
        <p className="auth-card__text">Start building your SmartStart projects.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Name" name="name" placeholder="Your name" registerProps={register("name")} error={errors.name?.message} />

        <Input label="Email" name="email" type="email" placeholder="you@example.com" registerProps={register("email")} error={errors.email?.message} />

        <Input label="Password" name="password" type="password" placeholder="••••••••" registerProps={register("password")} error={errors.password?.message} />

        {formError && <p className="auth-form__message">{formError}</p>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <p className="auth-card__footer">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegisterForm;