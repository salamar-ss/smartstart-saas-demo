import { Link } from "react-router-dom";

import Container from "@/shared/components/Container/Container";

function NotFoundPage() {
  return (
    <Container>
      <section>
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/">Back to home</Link>
      </section>
    </Container>
  );
}

export default NotFoundPage;