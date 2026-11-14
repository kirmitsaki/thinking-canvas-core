import { useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { caseStudyMeta, getProject, pageMeta, projects } from "@/data/projects";
import { CaseStudy } from "@/components/portfolio/case-study";
import { PortfolioBreadcrumb } from "@/components/portfolio/breadcrumb";
import { ContactLink } from "@/components/portfolio/shell";
import { NdaNotice } from "@/components/portfolio/nda-notice";

function SecureCodeWarriorComingSoon() {
  const meta = pageMeta(
    "Secure Code Warrior · Coming soon",
    "Rachel Kirmitsaki’s Secure Code Warrior case study is coming soon."
  );
  return (
    <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-12 md:pb-28 md:pt-16">
      <Seo
        title={meta.title}
        description={meta.description}
        path="/work/secure-code-warrior"
        ogType={meta.ogType}
      />
      <div className="mb-6"><NdaNotice /></div>
      <PortfolioBreadcrumb
        items={[{ label: "Portfolio", to: "/work" }, { label: "Secure Code Warrior" }]}
      />
      <header className="fade-in py-12 md:py-16">
        <h1 className="page-title">Secure Code Warrior</h1>
        <p className="standfirst mt-6 max-w-2xl">Coming soon</p>
      </header>
      <div className="hairline-top pt-8">
        <ContactLink />
      </div>
    </main>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();

  if (slug === "secure-code-warrior") return <SecureCodeWarriorComingSoon />;
  if (!slug || !projects.some((p) => p.slug === slug)) return <NotFound />;

  const project = getProject(slug as Parameters<typeof getProject>[0]);
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
                { label: "Duration", value: "1 year" },
                { label: "Industry", value: `${project.industry} · ${project.field}` },
              ]
            : undefined
        }
      />
    </>
  );
}
