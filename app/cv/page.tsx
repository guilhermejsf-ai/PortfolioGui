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
        <div className="button-row">
          <a
            className="button-primary"
            href={siteConfig.cvPdf!}
            target="_blank"
            rel="noreferrer"
          >
            Open CV
          </a>
          <a className="button-quiet" href={siteConfig.cvPdf!} download>
            Download CV
          </a>
          <Link href="/contact" className="button-quiet">
            Let’s talk
          </Link>
        </div>
      </div>
      <a
        href={siteConfig.cvPdf!}
        target="_blank"
        rel="noreferrer"
        className="relative mx-auto mt-6 block max-w-3xl border border-line bg-white"
      >
        <Image
          src={`${siteConfig.cvPdf}.png`}
          alt="CV preview. Open or download the full PDF with the buttons above."
          width={900}
          height={1273}
          sizes="(max-width:800px) 95vw, 768px"
          className="h-auto w-full"
        />
      </a>
    </div>
  );
}
