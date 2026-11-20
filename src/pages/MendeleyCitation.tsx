import { SnippetHeader } from '@/components/portfolio/snippet-header';
import { MendeleySections } from '@/components/portfolio/mendeley-sections';
import { citationSections } from '@/data/mendeley-citation';

export default function MendeleyCitation() {
  return <><SnippetHeader title="Citation" subtitle="The Microsoft® Word add-in for inserting references, changing citation styles and generating a bibliography, without leaving the document." intro="Mendeley Cite opens in a separate panel alongside the document, rather than over it. After sign-in, Mendeley Cite downloads the library from the cloud, so researchers can cite without having Mendeley Reference Manager open or installed." /><MendeleySections sections={citationSections} /></>;
}
