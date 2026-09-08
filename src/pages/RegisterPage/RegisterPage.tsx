import Container from "@/shared/components/Container/Container";

import RegisterForm from "@/features/auth/components/RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <Container>
      <section className="auth-page">
        <RegisterForm />
      </section>
    </Container>
  );
}

export default RegisterPage;