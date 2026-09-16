import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import styles from "./story.module.css";

export const metadata: Metadata = {
  title: "My story",
  description: "A personal note from Guilherme Fernandes. Get in touch to learn more about the experiences behind the work.",
  alternates: { canonical: "/story" },
};

export default function StoryPage() {
  return (
    <div className={styles.page}>
      <section className={styles.story} aria-labelledby="story-title">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>My story</p>
          <h1 id="story-title">There’s more to<br />the story.</h1>
          <p className={styles.intro}>
            I’m keeping the fuller story of my path private for now. If you’d like to know more about the experiences behind my work, I’m happy to talk.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/contact">Get in touch</Link>
            <Link className={styles.secondary} href="/projects">Explore my work</Link>
          </div>
          <p className={styles.note}>The work is here to explore. The rest is a conversation.</p>
        </div>
        <div className={styles.visual}>
          <Image
            src={siteConfig.portrait}
            alt="Guilherme Fernandes"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            className={styles.portrait}
            priority
          />
          <span className={styles.caption}>Guilherme Fernandes · Lisbon, Portugal</span>
        </div>
      </section>
    </div>
  );
}
