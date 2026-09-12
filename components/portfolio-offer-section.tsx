import { siteConfig } from "@/data/site";
export function PortfolioOfferSection() {
  return (
    <section className="offer-section">
      <div>
        <p>
          Want a personalised portfolio like this?{" "}
          <strong>LET’S BUILD YOURS!</strong>
        </p>
        <a className="text-link" href={`mailto:${siteConfig.social.email}`}>
          Email ↗
        </a>
      </div>
    </section>
  );
}
