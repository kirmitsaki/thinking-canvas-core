import { Lock } from 'lucide-react';

/** Confidentiality notice shown as a quiet notification bar at the top of pages that carry client visuals. */
export function NdaNotice() {
  return (
    <p className="nda-bar" role="note">
      <Lock size={12} className="nda-bar-icon shrink-0" aria-hidden="true" />
      <span>All visuals are blurred on purpose — the work is under NDA. Full interfaces and flows are shared on request.</span>
    </p>
  );
}
