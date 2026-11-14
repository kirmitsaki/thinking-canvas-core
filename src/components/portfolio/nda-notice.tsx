import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

/** Quiet confidentiality note shown at the very top of pages that carry client visuals. */
export function NdaNotice() {
  return (
    <p className="label-quiet flex flex-wrap items-center gap-x-2 gap-y-1">
      <Lock size={11} className="shrink-0" aria-hidden="true" />
      <span>All visuals are blurred on purpose — the work is under NDA. Full interfaces and flows are shared on request.</span>
      <Link to="/contact" className="accent-link ml-1">
        Request access <span className="arrow-nudge">→</span>
      </Link>
    </p>
  );
}
