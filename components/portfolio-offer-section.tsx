import { siteConfig } from "@/data/site";
export function PortfolioOfferSection() {
  return (
    <section className="offer-section">
      <div>
        <p>Need a clear, personal portfolio? <strong>I build selected projects.</strong></p>
        <a className="text-link" href={`mailto:${siteConfig.social.email}`}>
          Ask about a portfolio
        </a>
      </div>
    </section>
  );
}
