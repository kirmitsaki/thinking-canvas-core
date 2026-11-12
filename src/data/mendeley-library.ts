import dragDrop from '@/assets/mrm-library-drag-drop.webp';
import browse from '@/assets/mrm-library-browse-files.webp';
import manual from '@/assets/mrm-library-manually-create.webp';
import importing from '@/assets/mrm-library-importing-existing-ref.webp';
import exporting from '@/assets/mrm-library-exporting-ref.webp';
import smart from '@/assets/mrm-library-smart-collections.webp';
import custom from '@/assets/mrm-library-custom-collections.webp';
import search from '@/assets/mrm-library-search-filters.webp';
import bulk from '@/assets/mrm-library-bulk-actions.webp';
import details from '@/assets/mrm-library-RHS-panel.webp';
import sync from '@/assets/mrm-library-sync.webp';
import uploading from '@/assets/mrm-library-uploading-ref.webp';

export const librarySections = [
  { id: 'goals', title: 'The design goals', paragraphs: ['User feedback revealed three key challenges: cross-platform workflow disruptions, complex organisation systems and difficult team collaboration. The response was an intuitive interface integrating desktop and web functionality.', 'Collections, tags, search and filtering made reference organisation straightforward. The notebook supported topic-based pages and PDF annotations. Private groups let researchers share resources and annotations, while automatic synchronisation kept work accessible across computers.'] },
  { id: 'adding', title: 'Adding references', paragraphs: ['Researchers could bring references into the Library in four ways, accommodating both existing collections and individual papers.'], items: [
    { title: 'Drag and drop PDFs', text: 'Dragging one or multiple PDFs into the MRM window adds them to the Library. Mendeley extracts their metadata and creates reference entries.', image: { url: dragDrop }, alt: 'Dragging a PDF into the Mendeley Reference Manager Library' },
    { title: 'Upload feedback and interaction states', text: 'The interface communicates the drop target, upload progress and completion. The design also specifies how newly added references appear in the Library and how dragging one or multiple items is represented.', image: { url: uploading }, alt: 'Reference upload states showing drop targets, progress, completion, newly added entries and drag interaction details' },
    { title: 'Browse for files', text: 'The “+ Add new” menu offers “File(s) from computer” for uploading references from a computer.', image: { url: browse }, alt: 'Add new menu with the File(s) from computer option' },
    { title: 'Manually create an entry', text: 'When no PDF is available, “Add entry manually” lets researchers enter reference details themselves.', image: { url: manual }, alt: 'Manual reference entry form in Mendeley Reference Manager' },
    { title: 'Import an existing library', text: 'Libraries from other reference managers can be exported as BibTeX, EndNote XML or RIS, then added through “Import library” in the “+ Add new” menu.', image: { url: importing }, alt: 'Import library menu offering BibTeX, EndNote XML and RIS formats' },
  ] },
  { id: 'exporting', title: 'Exporting references', paragraphs: [], items: [{ title: 'The export flow', text: '', image: { url: exporting }, alt: 'Mendeley Library reference export flow across three interface screens' }] },
  { id: 'organising', title: 'Organising references', paragraphs: [], items: [
    { title: 'Smart collections', text: 'Mendeley automatically groups references into smart collections. Recently Added shows references added in the last 30 days; Recently Read shows PDFs opened in the last 30 days. Starring a reference adds it to Favorites. My Publications contains authored publications claimed through a Scopus Author Profile. Trash holds deleted references.', image: { url: smart }, alt: 'Library navigation showing Recently Added, Recently Read, Favorites, My Publications and Trash' },
    { title: 'Custom collections', text: 'Collections act as labels rather than moving references. A reference remains in All References, even if its collection is deleted. Researchers create a collection using “New collection” in the left-hand navigation and add references by dragging them onto it.', image: { url: custom }, alt: 'Custom collections in the Library sidebar with the New collection control' },
    { title: 'Bulk actions', text: 'Selecting a reference checkbox opens an action panel at the bottom of the screen. Researchers can add multiple references to collections or groups with “Add to”, mark them as Favorites with “Mark as”, or move them to Trash with “Delete”.', image: { url: bulk }, alt: 'Library bulk action panel with Add to, Mark as and Delete options' },
  ] },
  { id: 'finding', title: 'Finding and inspecting references', paragraphs: [], items: [
    { title: 'Search and filters', text: 'A keyword search retrieves references by title, author, year or source. Results are specific to the collection being viewed, or cover the whole Library when All References is selected.', image: { url: search }, alt: 'Mendeley Library search field and filter controls' },
    { title: 'The right-hand panel', text: '', image: { url: details }, alt: 'Mendeley Library right-hand reference details panel and its interface states' },
  ] },
  { id: 'syncing', title: 'Syncing across devices', paragraphs: ['The Library automatically syncs while online, backing up changes to the cloud and keeping desktop and web access up to date.', 'Hovering over the sync icon shows when the last sync occurred. Clicking the control starts a manual sync.'], items: [{ title: 'Sync status', text: '', image: { url: sync }, alt: 'Library sync control with a tooltip showing the time of the last synchronisation' }] },
];