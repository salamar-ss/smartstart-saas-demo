import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { generatorSchema, type GeneratorFormData } from "@/features/generator/schemas/generatorSchema";
import type { TemplateOption } from "@/features/generator/types/generator.types";
import { useCreateProject } from "@/features/projects/hooks/useCreateProject";

import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";
import Select from "@/shared/components/Select/Select";
import Textarea from "@/shared/components/Textarea/Textarea";

const templateOptions: TemplateOption[] = [
  { label: "Coach / Mentor", value: "coach" },
  { label: "Online Course", value: "course" },
  { label: "Service Business", value: "service" },
  { label: "Creative Portfolio", value: "creative" },
  { label: "Product Offer", value: "product" },
];

function GeneratorForm() {
  const navigate = useNavigate();
  const createProjectMutation = useCreateProject();
  const [successMessage, setSuccessMessage] = useState("");

  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm<GeneratorFormData>({
    resolver: zodResolver(generatorSchema),
    defaultValues: {
      businessName: "",
      audience: "",
      offer: "",
      transformation: "",
      templateType: "coach",
      bonuses: "",
      guarantee: "",
    },
  });

  const previewData = watch();

  async function onSubmit(data: GeneratorFormData) {
    setSuccessMessage("");

    const createdProject = await createProjectMutation.mutateAsync({
      title: data.businessName,
      body: data.offer,
      userId: 1,
      businessName: data.businessName,
      audience: data.audience,
      offer: data.offer,
      transformation: data.transformation,
      templateType: data.templateType,
      bonuses: data.bonuses ?? "",
      guarantee: data.guarantee ?? "",
    });

    setSuccessMessage("Project created successfully.");
    reset();
    navigate("/dashboard", {
      state: {
        createdProjectId: createdProject.id,
      },
    });
  }

  const isSaving = isSubmitting || createProjectMutation.isPending;

  return (
    <div className="generator">
      <div className="generator__form-card">
        <div className="generator__header">
          <span className="generator__eyebrow">SmartStart Generator</span>
          <h1 className="generator__title">Create your landing page project</h1>
          <p className="generator__text">Fill in the core business details and SmartStart will prepare a structured project draft.</p>
        </div>

        <form className="generator-form" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Business Name" name="businessName" placeholder="SmartStart Academy" registerProps={register("businessName")} error={errors.businessName?.message} />

          <Input label="Audience" name="audience" placeholder="online coaches, creators, consultants..." registerProps={register("audience")} error={errors.audience?.message} />

          <Textarea label="Offer" name="offer" placeholder="Describe what you sell and what problem it solves." registerProps={register("offer")} error={errors.offer?.message} />

          <Textarea label="Transformation" name="transformation" placeholder="What result should the client achieve?" registerProps={register("transformation")} error={errors.transformation?.message} />

          <Select label="Template Type" name="templateType" options={templateOptions} registerProps={register("templateType")} error={errors.templateType?.message} />

          <Textarea label="Bonuses" name="bonuses" placeholder="Optional bonuses, extras or included resources." registerProps={register("bonuses")} error={errors.bonuses?.message} />

          <Textarea label="Guarantee" name="guarantee" placeholder="Optional guarantee or risk reversal." registerProps={register("guarantee")} error={errors.guarantee?.message} />

          {createProjectMutation.isError && <p className="generator-form__error">Project could not be created. Please try again.</p>}

          {successMessage && <p className="generator-form__success">{successMessage}</p>}

          <div className="generator-form__actions">
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Creating..." : "Create Project"}
            </Button>

            <Button type="button" variant="secondary" onClick={() => reset()}>
              Reset
            </Button>
          </div>
        </form>
      </div>

      <aside className="generator__preview-card">
        <span className="generator__preview-label">Live Preview</span>

        <h2 className="generator__preview-title">{previewData.businessName || "Your Business Name"}</h2>

        <p className="generator__preview-text">
          Helping {previewData.audience || "your audience"} achieve {previewData.transformation || "a clear transformation"}.
        </p>

        <div className="generator__preview-offer">{previewData.offer || "Your offer will appear here."}</div>

        <div className="generator__preview-meta">
          <span>Template: {previewData.templateType}</span>
        </div>

        {previewData.bonuses && (
          <div className="generator__preview-section">
            <strong>Bonuses</strong>
            <p>{previewData.bonuses}</p>
          </div>
        )}

        {previewData.guarantee && (
          <div className="generator__preview-section">
            <strong>Guarantee</strong>
            <p>{previewData.guarantee}</p>
          </div>
        )}
      </aside>
    </div>
  );
}

export default GeneratorForm;