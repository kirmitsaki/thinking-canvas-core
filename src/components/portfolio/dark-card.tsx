import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * The burgundy editorial card used for "A little about me" on the home page.
 * Reused by case-study reflections so both share one treatment.
 */
export function DarkCard({
  label,
  title,
  children,
  to,
  className = "",
  bodyClassName = "",
  trailing,
}: {
  label: string;
  title?: ReactNode;
  children?: ReactNode;
  to?: string;
  className?: string;
  bodyClassName?: string;
  trailing?: ReactNode;
}) {
  const content = (
    <>
      {trailing}
      <p className="label dark-card-label">{label}</p>
      {title && <h2 className="mt-4 max-w-[600px] section-title">{title}</h2>}
      {children && (
        <div className={`mt-6 body-copy text-warm-ivory/80 ${bodyClassName}`.trim()}>{children}</div>
      )}
    </>
  );

  const classes = `chocolate-card group relative block p-8 md:p-12 ${className}`.trim();

  return to ? (
    <Link to={to} className={classes}>
      {content}
    </Link>
  ) : (
    <div className={classes}>{content}</div>
  );
}
