
import { T } from "@/components/language-provider";
import Link from "next/link";

import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-32">
      <div className="rounded-[36px] border border-line bg-panel p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-deep"><T>{"Not found"}</T></p>
        <h1 className="mt-4 font-display text-5xl tracking-tight text-ink"><T>{"This page does not exist yet."}</T></h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted"><T>{"The portfolio structure is ready to expand, but this route is not part of version 1."}</T></p>
        <Link
          href="/projects"
          prefetch={false}
          className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
        ><T>{"Open projects"}</T></Link>
      </div>
    </Container>
  );
}
