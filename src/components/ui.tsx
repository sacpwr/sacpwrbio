import type { ReactNode } from "react";
import {
  Activity,
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Layers3,
  Route,
  Server,
  ShieldCheck,
} from "lucide-react";

const icons = {
  activity: Activity,
  cloud: Cloud,
  code: Code2,
  database: Database,
  layers: Layers3,
  route: Route,
  server: Server,
  shield: ShieldCheck,
};
export function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const Component = icons[name as keyof typeof icons] ?? Code2;
  return <Component size={size} strokeWidth={1.5} aria-hidden="true" />;
}
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function SectionHeading({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-intro">{children}</div>}
    </div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
