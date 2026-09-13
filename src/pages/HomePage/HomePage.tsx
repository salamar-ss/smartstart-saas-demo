import { Link } from "react-router-dom";

import Container from "@/shared/components/Container/Container";

function HomePage() {
  return (
    <Container>
      <section className="home-page">
        <div className="home-page__content">
          <span className="home-page__eyebrow">SmartStart SaaS</span>

          <h1>Build landing page projects with a structured React workflow.</h1>

          <p>
            A production-style React + TypeScript demo with authentication, dashboard, generator, templates, API layer and routing.
          </p>

          <div className="home-page__actions">
            <Link className="home-page__primary" to="/generator">
              Start generator
            </Link>

            <Link className="home-page__secondary" to="/templates">
              View templates
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default HomePage;