import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Seo
        title="Page not found · Rachel Kirmitsaki"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <div className="max-w-md text-center">
        <p className="label">404</p>
        <h1 className="mt-6 page-title">Page not found</h1>
        <p className="mt-3 body-copy text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <Link to="/" className="accent-link">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
