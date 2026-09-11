import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import { profile, metrics } from "../data/portfolio";
import { ExternalLink } from "../components/ui";

export default function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="eyebrow">FULL-STACK ENGINEERING · TECHNICAL LEADERSHIP</p>
        <span className="location">
          <MapPin size={15} aria-hidden="true" /> {profile.location}
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            Sachin
            <br />
            <span>Pawar.</span>
          </h1>
          <p className="hero-role">
            Technical Lead &<br />
            Full-Stack Engineer
          </p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.resume}`}
              download
              className="button button-outline"
            >
              Download resume <Download size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="social-links">
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Engineering approach">
          <div className="panel-top">
            <span className="eyebrow">MY ENGINEERING FOCUS</span>
            <span className="panel-symbol" aria-hidden="true">
              ↗
            </span>
          </div>
          <h2>
            From the system.
            <br />
            To the team.
            <br />
            <span>To the outcome.</span>
          </h2>
          <div className="focus-list">
            <a href="#architecture">
              <span className="focus-index">01</span>
              <div>
                <h3>Design for scale</h3>
                <p>Architecture · APIs · AWS</p>
              </div>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a href="#leadership">
              <span className="focus-index">02</span>
              <div>
                <h3>Lead with clarity</h3>
                <p>People · Standards · Delivery</p>
              </div>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a href="#innovation">
              <span className="focus-index">03</span>
              <div>
                <h3>Build with intelligence</h3>
                <p>AI agents · Engineering workflows</p>
              </div>
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
          <div className="current-role">
            <span className="eyebrow">CURRENTLY</span>
            <p>
              {profile.currentRole}
              <br />
              <strong>CitiusTech</strong>
            </p>
          </div>
        </aside>
      </div>
      <div className="metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <div>
              <p>{metric.label}</p>
              <span>{metric.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
