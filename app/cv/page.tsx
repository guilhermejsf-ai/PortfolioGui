import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  alternates: { canonical: "/cv" },
};

export default function CvPage() {
  return (
    <div className="work-shell case-page">
      <h1 className="sr-only">CV</h1>
      <div className="cv-actions mx-auto max-w-3xl">
        <div className="cv-action-bar" role="group" aria-label="CV actions">
          <a
            className="cv-action cv-action-primary"
            href={siteConfig.cvPdf!}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h6"/></svg>
            <span>Open CV</span>
          </a>
          <a className="cv-action" href={siteConfig.cvPdf!} download>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/></svg>
            <span>Download CV</span>
          </a>
          <Link href="/contact" className="cv-action">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>
            <span>Let’s talk</span>
          </Link>
        </div>
      </div>
      {siteConfig.cvPreviewPages.map((src, index) => <a
        key={src}
        href={siteConfig.cvPdf!}
        target="_blank"
        rel="noreferrer"
        className="relative mx-auto mt-6 block max-w-3xl border border-line bg-white"
      >
        <Image
          src={src}
          alt={`CV preview, page ${index + 1} of ${siteConfig.cvPreviewPages.length}. Open or download the full PDF with the buttons above.`}
          width={1200}
          height={1699}
          sizes="(max-width:800px) 95vw, 768px"
          className="h-auto w-full"
        />
      </a>)}
    </div>
  );
}
