import type { Metadata } from "next";
import Image from "next/image";

import { siteConfig } from "@/data/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Guilherme Fernandes about growth and operations roles, collaborations, or a project you have in mind.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="contact-heading">
        <p className={styles.eyebrow}>Contact me</p>
        <h1 id="contact-heading">Good work starts<br />with a <span>conversation.</span></h1>
        <p className={styles.description}>
          A role, a project, or an idea worth exploring. Tell me what you have in mind.
        </p>
        <div className={styles.person}>
          <Image src={siteConfig.portrait} alt="Guilherme Fernandes" width={64} height={64} className={styles.portrait} />
          <div>
            <p className={styles.name}>Guilherme Fernandes</p>
            <p className={styles.specialties}>Growth, operations & company building</p>
          </div>
        </div>
      </section>

      <section className={styles.connections} aria-label="Ways to get in touch">
        {siteConfig.social.email ? (
          <a className={styles.email} href={`mailto:${siteConfig.social.email}`}>
            <div className={styles.emailTop}>
              <span className={styles.eyebrow}>Drop me a line</span>
            </div>
            <h2>Let’s talk.</h2>
            <p>A little context is all we need to get started.</p>
            <span className={styles.address}>{siteConfig.social.email}</span>
          </a>
        ) : null}

      </section>
      <nav className={styles.links} aria-label="Other ways to connect">
          {siteConfig.social.linkedin ? (
            <a className={styles.link} href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              <div><h2>LinkedIn</h2><p>Connect professionally</p></div>
            </a>
          ) : null}
          <a className={styles.link} href="tel:+351964125994">
            <div><h2>Prefer a call?</h2><p>+351 964 125 994</p></div>
          </a>
          {siteConfig.cvPdf ? (
            <a className={styles.link} href={siteConfig.cvPdf} target="_blank" rel="noreferrer">
              <div><h2>A little more background</h2><p>View my CV <span className={styles.fileType}>PDF</span></p></div>
            </a>
          ) : null}
      </nav>
    </div>
  );
}
