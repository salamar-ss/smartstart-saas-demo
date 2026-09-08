import Container from "@/shared/components/Container/Container";

import { useAuth } from "@/features/auth/hooks/useAuth";

function DashboardPage() {
  const { user } = useAuth();

  return (
    <Container>
      <section>
        <h1>Dashboard</h1>
        <p>Welcome, {user?.name}.</p>
        <p>Your SmartStart projects will be listed here.</p>
      </section>
    </Container>
  );
}

export default DashboardPage;