import { Container } from "@/components/container";
import { ReachOutSection } from "@/components/reach-out-section";
import { siteConfig } from "@/data/site";

export default function CvPage() {
  const hasPdf = Boolean(siteConfig.cvPdf);
  const cvPreview = hasPdf ? `${siteConfig.cvPdf}.png` : null;

  return (
    <Container className="flex min-h-[calc(100vh-5.75rem)] items-stretch py-6">
      <div className="grid flex-1 gap-8 lg:grid-cols-[minmax(280px,0.42fr)_minmax(0,0.58fr)]">
        <div className="flex flex-col justify-start pt-2">
          <ReachOutSection embedded />
        </div>

        {cvPreview ? (
          <div className="min-h-[68vh] lg:min-h-0">
            <div className="group relative flex h-full min-h-[60vh] items-center justify-center overflow-hidden rounded-[32px] border border-line bg-white p-4 shadow-card">
              <img
                src={cvPreview}
                alt="Preview of Guilherme Fernandes CV"
                className="h-full w-full object-contain object-top transition duration-300 group-hover:scale-[1.01]"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_35%,rgba(17,24,39,0.16)_100%)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <a
                href={siteConfig.cvPdf as string}
                target="_blank"
                rel="noreferrer"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white opacity-0 shadow-card transition duration-300 group-hover:opacity-100"
              >
                Open CV
              </a>
            </div>
          </div>
        ) : (
          <div className="rounded-[32px] border border-line bg-panel-alt px-6 py-5 text-sm font-medium text-muted">
            Add PDF CV to enable preview and download.
          </div>
        )}
      </div>
    </Container>
  );
}
