import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  GraduationCap,
  Mail,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import { ExternalLink, Icon, SectionHeading, Tags } from "./components/ui";
import {
  agents,
  architecture,
  awards,
  certifications,
  education,
  experiences,
  expertise,
  leadership,
  navigation,
  profile,
  projects,
} from "./data/portfolio";

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <section
          id="about"
          className="section container about-section"
          aria-labelledby="about-title"
        >
          <p className="eyebrow">01 / THE WAY I WORK</p>
          <div className="about-grid">
            <h2 id="about-title">
              Big-picture thinking.
              <br />
              <span className="muted-heading">Close to the code.</span>
            </h2>
            <div>
              <p className="large-copy">
                I’m an engineer who takes ownership of the whole journey—from
                understanding the problem to building the system and helping the
                team deliver it.
              </p>
              <p>
                Across healthcare, industrial software, transportation, and
                enterprise platforms, I’ve combined hands-on development with
                solution architecture and technical leadership. Today, I’m
                bringing that same discipline to AI-assisted engineering.
              </p>
              <a className="text-link" href="#experience">
                My engineering journey{" "}
                <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="section section-tinted"
          aria-label="Selected work"
        >
          <div className="container">
            <SectionHeading
              number="02"
              eyebrow="SELECTED WORK"
              title="Engineering in practice."
            >
              <p>
                Enterprise engineering highlights from my professional
                experience. Summaries focus on my contributions and technical
                approach.
              </p>
            </SectionHeading>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <Icon name={project.icon} size={29} />
                    <span className="project-number">{project.number}</span>
                  </div>
                  <p className="eyebrow project-domain">{project.domain}</p>
                  <h3>{project.title}</h3>
                  <h4>{project.name}</h4>
                  <p>{project.problem}</p>
                  <div className="project-approach">
                    <span className="eyebrow">THE APPROACH</span>
                    <p>{project.approach}</p>
                  </div>
                  <p className="contribution">{project.contribution}</p>
                  <Tags items={project.tags} />
                </article>
              ))}
            </div>
            <div className="section-endnote">
              <p>
                Professional work is summarized here; proprietary code is not
                published.
              </p>
              <ExternalLink href={profile.github} className="text-link">
                Explore my GitHub
              </ExternalLink>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="section container"
          aria-label="Professional experience"
        >
          <SectionHeading
            number="03"
            eyebrow="EXPERIENCE"
            title="A career built on ownership."
          >
            <p>
              11+ years of building software, shaping architecture, and growing
              engineering teams.
            </p>
          </SectionHeading>
          <div className="timeline">
            {experiences.map((experience) => (
              <article
                className={`experience ${experience.current ? "is-current" : ""}`}
                key={experience.company}
              >
                <div className="experience-period">
                  <span>{experience.period}</span>
                  <p>{experience.location}</p>
                  {experience.current && (
                    <span className="current-badge">Current role</span>
                  )}
                </div>
                <div className="experience-content">
                  <p className="company">{experience.company}</p>
                  <h3>{experience.role}</h3>
                  <p className="role-subtitle">{experience.subtitle}</p>
                  <ul className="experience-points">
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Tags items={experience.tags} />
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="skills"
          className="section section-tinted"
          aria-label="Technical expertise"
        >
          <div className="container">
            <SectionHeading
              number="04"
              eyebrow="TECHNICAL EXPERTISE"
              title="Across the stack. Into the details."
            >
              <p>
                A foundation in React, Node.js, and AWS, supported by experience
                in data, security, delivery, and operations.
              </p>
            </SectionHeading>
            <div className="expertise-grid">
              {expertise.map((item) => (
                <article className="expertise-card" key={item.title}>
                  <Icon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Tags items={item.skills} />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="architecture"
          className="section container"
          aria-label="Architecture and engineering"
        >
          <SectionHeading
            number="05"
            eyebrow="ARCHITECTURE & ENGINEERING"
            title="Decisions that hold up in production."
          />
          <div className="architecture-grid">
            {architecture.map((item) => (
              <article key={item.number}>
                <span className="architecture-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="innovation"
          className="section innovation-section"
          aria-label="AI and innovation"
        >
          <div className="container">
            <div className="innovation-heading">
              <p className="eyebrow">06 / AI & INNOVATION</p>
              <h2>
                Less repetitive work.
                <br />
                <span>More engineering.</span>
              </h2>
              <p>
                I apply Claude-based agents and GitHub Copilot across the
                development lifecycle, with structured inputs, validation
                checks, and human review.
              </p>
              <div className="innovation-note">
                <ShieldCheck size={19} aria-hidden="true" />
                <span>Engineering guardrails stay part of the workflow.</span>
              </div>
            </div>
            <div className="agent-list">
              {agents.map((agent, index) => (
                <article className="agent-row" key={agent.title}>
                  <div className="agent-stage">
                    <span>0{index + 1}</span>
                    <p>{agent.stage}</p>
                  </div>
                  <div className="agent-copy">
                    <h3>{agent.title}</h3>
                    <p>{agent.text}</p>
                  </div>
                  <span className="agent-gate">
                    <Check size={15} aria-hidden="true" />
                    {agent.gate}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="leadership"
          className="section container"
          aria-label="Engineering leadership"
        >
          <SectionHeading
            number="07"
            eyebrow="LEADERSHIP"
            title="Better systems start with better teams."
          >
            <p>
              Hands-on leadership for a team of 10+ full-stack developers,
              grounded in mentoring, standards, and delivery ownership.
            </p>
          </SectionHeading>
          <div className="leadership-grid">
            {leadership.map((item, index) => (
              <article key={item.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          id="achievements"
          className="section section-tinted"
          aria-label="Awards and recognition"
        >
          <div className="container">
            <SectionHeading
              number="08"
              eyebrow="RECOGNITION"
              title="Work that made a difference."
            >
              <p>
                Recognition for leadership, ownership, and successful delivery.
              </p>
            </SectionHeading>
            <div className="award-list">
              {awards.map((award) => (
                <article className="award-row" key={award.name}>
                  <Trophy size={22} aria-hidden="true" />
                  <h3>{award.name}</h3>
                  <p>
                    {award.issuer}
                    <span>{award.context}</span>
                  </p>
                  <time>{award.year}</time>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="certifications"
          className="section container"
          aria-label="Certifications and learning"
        >
          <SectionHeading
            number="09"
            eyebrow="CERTIFICATIONS & LEARNING"
            title="Keep building. Keep learning."
          >
            <p>
              Completed courses and credentials in AI, architecture, leadership,
              and software engineering.
            </p>
          </SectionHeading>
          <div className="cert-grid">
            {certifications
              .filter((cert) => cert.featured)
              .map((cert) => (
                <article className="cert-card" key={cert.title}>
                  <div className="cert-top">
                    <span className="eyebrow">{cert.category}</span>
                    <Check size={17} aria-label="Completed" />
                  </div>
                  <h3>{cert.title}</h3>
                  <p>
                    {cert.issuer}
                    <span>Completed</span>
                  </p>
                </article>
              ))}
          </div>
          <details className="more-certificates">
            <summary>
              View {certifications.filter((cert) => !cert.featured).length} more
              completed courses & credentials{" "}
              <span className="details-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <ul className="all-certificates">
              {certifications
                .filter((cert) => !cert.featured)
                .map((cert) => (
                  <li key={cert.title}>
                    <Check size={16} aria-hidden="true" />
                    <div>
                      <h3>{cert.title}</h3>
                      <p>{cert.issuer} · Completed</p>
                    </div>
                  </li>
                ))}
            </ul>
          </details>
          <div className="cert-link-row">
            <ExternalLink
              className="text-link"
              href={`${profile.linkedin}details/certifications/`}
            >
              View learning on LinkedIn
            </ExternalLink>
            <p>
              Course completions are listed separately from professional
              experience.
            </p>
          </div>
          <div className="education">
            <div className="education-label">
              <GraduationCap size={22} aria-hidden="true" />
              <span className="eyebrow">EDUCATION</span>
            </div>
            {education.map((item) => (
              <div key={item.degree}>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <div className="contact-heading">
              <p className="eyebrow">10 / LET’S CONNECT</p>
              <h2 id="contact-title">
                Have a complex challenge?
                <br />
                <span>Let’s build what’s next.</span>
              </h2>
              <p>
                Let’s talk about technical leadership, full-stack engineering,
                solution architecture, and building effective engineering teams.
              </p>
            </div>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <Mail size={24} aria-hidden="true" />
              <span>{profile.email}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-bottom">
              <p>Pune, Maharashtra, India</p>
              <div>
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
                <a
                  href={`${import.meta.env.BASE_URL}${profile.resume}`}
                  download
                >
                  Resume <Download size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <div className="footer-top">
          <a className="brand" href="#home">
            <span className="brand-mark">
              sp<span>.</span>
            </span>
            <span>Sachin Pawar</span>
          </a>
          <a className="text-link" href="#home">
            Back to top <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sachin Pawar</p>
          <ExternalLink href={profile.repository}>
            View portfolio source
          </ExternalLink>
        </div>
      </footer>
    </>
  );
}
