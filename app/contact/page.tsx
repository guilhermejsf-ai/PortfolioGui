import { getLocale } from "@/lib/i18n/server";
import { translate } from "@/lib/i18n";

import { T } from "@/components/language-provider";
import type { Metadata } from "next";
import Image from "next/image";

import { siteConfig } from "@/data/site";
import styles from "./contact.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: translate("Contact", locale),
    description: translate("Get in touch with Guilherme Fernandes about growth and operations roles, collaborations, or a project you have in mind.", locale),
    alternates: { canonical: "/contact" },
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const t = (text: string) => translate(text, locale);
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="contact-heading">
        <p className={styles.eyebrow}><T>{"Contact me"}</T></p>
        <h1 id="contact-heading"><T>{"Good work starts"}</T><br /><T>{"with a"}</T>{" "}<span><T>{"conversation."}</T></span></h1>
        <p className={styles.description}><T>{"A role, a project, or an idea worth exploring. Tell me what you have in mind."}</T></p>
        <div className={styles.person}>
          <Image src={siteConfig.portrait} alt={t("Guilherme Fernandes")} width={64} height={64} className={styles.portrait} />
          <div>
            <p className={styles.name}><T>{"Guilherme Fernandes"}</T></p>
            <p className={styles.specialties}><T>{"Growth, operations & company building"}</T></p>
          </div>
        </div>
      </section>

      <section className={styles.connections} aria-label={t("Ways to get in touch")}>
        {siteConfig.social.email ? (
          <a className={styles.email} href={`mailto:${siteConfig.social.email}`}>
            <div className={styles.emailTop}>
              <span className={styles.eyebrow}><T>{"Drop me a line"}</T></span>
            </div>
            <h2><T>{"Let’s talk."}</T></h2>
            <p><T>{"A little context is all we need to get started."}</T></p>
            <span className={styles.address}><T>{siteConfig.social.email}</T></span>
          </a>
        ) : null}

      </section>
      <nav className={styles.links} aria-label={t("Other ways to connect")}>
          {siteConfig.social.linkedin ? (
            <a className={styles.link} href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              <div><h2><T>{"LinkedIn"}</T></h2><p><T>{"Connect professionally"}</T></p></div>
            </a>
          ) : null}
          <a className={styles.link} href="tel:+351964125994">
            <div><h2><T>{"Prefer a call?"}</T></h2><p><T>{"+351 964 125 994"}</T></p></div>
          </a>
          {siteConfig.cvPdf ? (
            <a className={styles.link} href={siteConfig.cvPdf} target="_blank" rel="noreferrer">
              <div><h2><T>{"A little more background"}</T></h2><p><T>{"View my CV"}</T>{" "}<span className={styles.fileType}><T>{"PDF"}</T></span></p></div>
            </a>
          ) : null}
      </nav>
    </div>
  );
}
