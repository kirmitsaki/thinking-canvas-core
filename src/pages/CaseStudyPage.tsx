import { useParams, useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { caseStudyMeta, getProject, projects } from "@/data/projects";
import { CaseStudy } from "@/components/portfolio/case-study";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const [params] = useSearchParams();

  if (!slug || !projects.some((p) => p.slug === slug)) return <NotFound />;

  const project = getProject(slug as Parameters<typeof getProject>[0]);
  const section = project.sections.find(item => item.id === params.get("snippet"));
  if (section) {
    const snippetSection = project.slug === "corresilience" && section.id === "interface"
      ? { ...section, groups: section.groups?.filter(group => !["What users told us", "Areas for improvement"].includes(group.label)) }
      : section;
    return <CaseStudy sectionOnly project={{ ...project, sections: [snippetSection], contribution: "", outcomes: [], outcomeStats: undefined, outcomeImage: undefined, reflection: undefined, evidencePending: false }} />;
  }
  const meta = caseStudyMeta(project);
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={`/work/${project.slug}`}
        ogType={meta.ogType}
      />
      <CaseStudy
        project={project}
        facts={
          project.slug === "mendeley"
            ? [
                { label: "Role", value: project.role },
                { label: "Tasks", value: "UX/UI design, Design system, Research, Accessibility, Web & Desktop application, Microsoft plugin" },
                { label: "Industry", value: `${project.industry} · ${project.field}` },
              ]
            : project.slug === "aladdin" || project.slug === "corresilience"
              ? [
                  { label: "Role", value: project.role },
                  { label: "Tasks", value: "UX/UI design, product discovery, user testing, prototyping, MVP, client handover" },
                  { label: "Industry", value: `${project.industry} · ${project.field}` },
                ]
              : project.slug === "pawsquad" || project.slug === "migreat"
              ? [
                  { label: "Role", value: project.role },
                  { label: "Tasks", value: "Web design, Brand design, Web and Mobile" },
                  { label: "Industry", value: `${project.industry} · ${project.field}` },
                ]
              : project.slug === "mds-quostar"
              ? [
                  { label: "Role", value: project.role },
                  { label: "Tasks", value: "Web design, Front end development, Client project" },
                  { label: "Industry", value: `${project.industry} · ${project.field}` },
                ]
              : project.slug === "meliniki"
              ? [
                  { label: "Role", value: project.role },
                  { label: "Tasks", value: "Label design, Client handover" },
                  { label: "Industry", value: `${project.industry} · ${project.field}` },
                ]
              : project.slug === "jobme"
              ? [
                  { label: "Role", value: project.role },
                  { label: "Tasks", value: "Logo design, Styleguide, Client handover" },
                  { label: "Industry", value: `${project.industry} · ${project.field}` },
                ]
              : undefined
        }
      />
    </>
  );
}
