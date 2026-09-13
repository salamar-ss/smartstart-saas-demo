import { useMemo, useState } from "react";

import TemplateCard from "@/features/templates/components/TemplateCard/TemplateCard";
import { useTemplates } from "@/features/templates/hooks/useTemplates";
import { type TemplateCategory } from "@/features/templates/types/template.types";

import Container from "@/shared/components/Container/Container";
import ErrorState from "@/shared/components/ErrorState/ErrorState";
import Loader from "@/shared/components/Loader/Loader";

import Input from "@/shared/components/Input/Input";
import Select from "@/shared/components/Select/Select";

type CategoryFilter = "all" | TemplateCategory;

function TemplatesPage() {
  const { data: templates, isLoading, isError, refetch } = useTemplates();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filteredTemplates = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    return (templates ?? []).filter((template) => {
      const matchesSearch =
        template.title.toLowerCase().includes(normalizedSearch) ||
        template.description.toLowerCase().includes(normalizedSearch);

      const matchesCategory = category === "all" || template.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [templates, search, category]);

  return (
    <Container>
      <section className="templates-page">
        <div className="templates-page__header">
          <span className="templates-page__eyebrow">Template Gallery</span>
          <h1>Choose a SmartStart template</h1>
          <p>Browse conversion-focused structures for different business types.</p>
        </div>

        <div className="templates-page__filters">
          <Input label="Search templates" name="templateSearch" placeholder="Search by title or description..." registerProps={{ value: search, onChange: (event) => setSearch(event.target.value) }} />

          <Select
            label="Category"
            name="templateCategory"
            options={[
              { label: "All", value: "all" },
              { label: "Coach", value: "coach" },
              { label: "Course", value: "course" },
              { label: "Service", value: "service" },
              { label: "Creative", value: "creative" },
              { label: "Product", value: "product" },
            ]}
            registerProps={{ value: category, onChange: (event) => setCategory(event.target.value as CategoryFilter) }}
          />
        </div>

        {isLoading && <Loader text="Loading templates..." />}

        {isError && <ErrorState title="Failed to load templates" message="Please try again." actionLabel="Try again" onAction={() => refetch()} />}

        {!isLoading && !isError && filteredTemplates.length === 0 && (
          <div className="templates-page__empty">
            <h2>No templates found</h2>
            <p>Try another search or category.</p>
          </div>
        )}

        {!isLoading && !isError && filteredTemplates.length > 0 && (
          <div className="templates-page__grid">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}

export default TemplatesPage;