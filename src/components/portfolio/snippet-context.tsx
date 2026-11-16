import { createContext, useContext, useState, type ReactNode } from 'react';
import { Link, useLocation, useNavigate, type LinkProps } from 'react-router-dom';
import { secondarySnippetFor, type SecondarySnippet } from '@/data/secondary-snippets';
import { SnippetModal } from './snippet-modal';
import { Button } from '@/components/ui/button';

const SnippetContext = createContext<(snippet: SecondarySnippet) => void>(() => {});
export const useSnippetModal = () => useContext(SnippetContext);

export function SnippetProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<SecondarySnippet | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const legacy = params.get('openSnippet');
  const view = params.get('view');
  const legacySnippet = legacy ? secondarySnippetFor(`${location.pathname}/${legacy}${view ? `?view=${encodeURIComponent(view)}` : ''}`) : undefined;
  const snippet = selected ?? legacySnippet ?? null;
  const close = () => {
    setSelected(null);
    if (legacy) {
      params.delete('openSnippet');
      navigate({ pathname: location.pathname, search: params.toString(), hash: location.hash }, { replace: true, preventScrollReset: true });
    }
  };
  return <SnippetContext.Provider value={setSelected}>{children}<SnippetModal snippet={snippet} onClose={close} /></SnippetContext.Provider>;
}

export function SnippetLink({ to, children, className, ...props }: LinkProps) {
  const open = useSnippetModal();
  const snippet = typeof to === 'string' ? secondarySnippetFor(to) : undefined;
  if (!snippet) return <Link to={to} className={className} {...props}>{children}</Link>;
  return <Button variant="ghost" aria-haspopup="dialog" onClick={() => open(snippet)} className={`h-auto whitespace-normal text-left hover:bg-card hover:text-card-foreground ${className ?? ''}`}>{children}</Button>;
}