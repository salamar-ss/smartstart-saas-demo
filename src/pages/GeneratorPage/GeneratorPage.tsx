import GeneratorForm from "@/features/generator/components/GeneratorForm/GeneratorForm";

import Container from "@/shared/components/Container/Container";

function GeneratorPage() {
  return (
    <Container>
      <section className="generator-page">
        <GeneratorForm />
      </section>
    </Container>
  );
}

export default GeneratorPage;