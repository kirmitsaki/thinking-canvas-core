import { SnippetHeader } from '@/components/portfolio/snippet-header';
import { MendeleySections } from '@/components/portfolio/mendeley-sections';
import { readerSections } from '@/data/mendeley-reader';

export default function MendeleyReader() {
  return <><SnippetHeader title="Reader" subtitle="Reading, highlighting and annotating PDFs, with notes across multiple documents kept in one place." intro="Managing notes across multiple PDFs while doing research can be challenging. Students and researchers often find their notes scattered and disorganised, making it difficult to connect ideas from different sources." /><MendeleySections sections={readerSections} introInHeader /></>;
}
