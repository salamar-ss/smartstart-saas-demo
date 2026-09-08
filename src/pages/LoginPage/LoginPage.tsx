import Container from "@/shared/components/Container/Container";

import LoginForm from "@/features/auth/components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <Container>
      <section className="auth-page">
        <LoginForm />
      </section>
    </Container>
  );
}

export default LoginPage;