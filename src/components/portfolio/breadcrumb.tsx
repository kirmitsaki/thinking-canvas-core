import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Fragment, type ReactNode } from "react";

type BreadcrumbItem = {
  label: string;
  to?: "/work" | "/field-notes" | "/work/mendeley" | "/work/secure-code-warrior" | "/work/origin-markets";
};

export function PortfolioBreadcrumb({
  items,
  trailing,
}: {
  items: BreadcrumbItem[];
  trailing?: ReactNode;
}) {
  return (
    <div className="masthead-bar flex-wrap gap-y-3">
      <nav aria-label="Breadcrumb" className="min-w-0">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 caption">
          {items.map((item, index) => (
            <Fragment key={item.label}>
              {index > 0 && (
                <li aria-hidden="true">
                  <ChevronRight size={14} className="text-muted-foreground" />
                </li>
              )}
              <li aria-current={index === items.length - 1 ? "page" : undefined}>
                {item.to ? (
                  <Link to={item.to} className="text-accent hover:underline underline-offset-4">
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>
      {trailing && <div className="ml-auto min-w-0 max-w-full">{trailing}</div>}
    </div>
  );
}
