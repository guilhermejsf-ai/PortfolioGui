import { getLocale } from "@/lib/i18n/server";
import { translate } from "@/lib/i18n";

import { T } from "@/components/language-provider";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import styles from "./story.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: translate("My story", locale),
    description: translate("A personal note from Guilherme Fernandes. Get in touch to learn more about the experiences behind the work.", locale),
    alternates: { canonical: "/story" },
  };
}

export default async function StoryPage() {
  const locale = await getLocale();
  const t = (text: string) => translate(text, locale);
  return (
    <div className={styles.page}>
      <section className={styles.story} aria-labelledby="story-title">
        <div className={styles.copy}>
          <p className={styles.eyebrow}><T>{"My story"}</T></p>
          <h1 id="story-title"><T>{"There’s more to"}</T><br /><T>{"the story."}</T></h1>
          <p className={styles.intro}><T>{"I’m keeping the fuller story of my path private for now. If you’d like to know more about the experiences behind my work, I’m happy to talk."}</T></p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/contact"><T>{"Get in touch"}</T></Link>
            <Link className={styles.secondary} href="/projects"><T>{"Explore my work"}</T></Link>
          </div>
          <p className={styles.note}><T>{"The work is here to explore. The rest is a conversation."}</T></p>
        </div>
        <div className={styles.visual}>
          <Image
            src={siteConfig.portrait}
            alt={t("Guilherme Fernandes")}
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            className={styles.portrait}
            priority
          />
          <span className={styles.caption}><T>{"Guilherme Fernandes · Lisbon, Portugal"}</T></span>
        </div>
      </section>
    </div>
  );
}
