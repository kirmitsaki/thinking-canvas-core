import SiteNav from "@/components/SiteNav";

const story: string[] = [
  "I grew up in the 90s, back when computers were still mysterious enough to feel like magic, but not yet friendly enough to pretend they weren't judging you.",
  "In Greece, they had already infiltrated offices, quietly humming away in corners like oversized calculators, but at home they were just making their grand debut. Families didn't have computers yet; they hosted them, like slightly intimidating guests.",
  "My father, sensing destiny (or at least a fun Saturday afternoon), took me to one of the first tech expos in our city. It was chaos in the best way: blinking lights, clunky hardware, and software demos that felt like peeking into the future, if the future ran on floppy disks and optimism.",
  "I wandered around pressing buttons with the confidence of someone who has absolutely no idea what they're doing but is determined to do it anyway. Screens lit up. Things happened. I didn't understand any of it, but I was having the time of my life interacting with what I firmly believed were unusually talented televisions.",
  "And then, like all good origin stories, one followed us home.",
  "The computer was given its own sacred territory: the computer desk. This wasn't just furniture; it was an ecosystem. There was a designated shelf for the keyboard, a throne for the bulky monitor (a cube with ambitions), and a carefully arranged sprawl of cables and components that looked important enough to never question.",
  "It was off-white in that very specific way that suggested it had already lived a full life before meeting us. It made sounds: whirs, clicks, occasional existential sighs. The keyboard was enormous, a sprawling landscape my small hands could barely navigate. I typed using my two index fingers, like a very determined woodpecker.",
  "And the layout, oh, the layout. The letters were scattered in what felt like a personal attack against the alphabet I had so recently mastered. I had just learned that A comes before B, B before C: order, logic, beauty. And now here was this machine insisting, no, chaos is the system.",
  "Naturally, I took it personally.",
  "One of the first pieces of software my father installed was an encyclopaedia. It quickly became my second favourite game. With a single click, well, several slow, deliberate, slightly inaccurate clicks, I could access everything. Information about the world, neatly packaged into digital pages. I would scroll, click, open, and wander through topics with no real plan, just curiosity and the occasional accidental discovery.",
  "It felt infinite. It felt powerful. It felt like cheating, somehow.",
  "Looking back, I think that was the moment. Not a grand revelation, no dramatic lightning strike. Just a child, a clunky computer, and the intoxicating realisation that you could build little worlds inside a box and invite others to explore them.",
  "Which, in hindsight, is a very reasonable way to end up making tech products.",
];

const coda: string[] = [
  "These days I lead product design across EMEA and APAC at Secure Code Warrior. Before that I was the first in-house designer at Origin Markets, a fintech platform used by global financial institutions, and a Senior Designer at Mendeley, part of Elsevier, where the product was used by over 120,000 researchers.",
  "I have a degree in Computer Science and started my career as a UX Engineer, which means I've been translating between design and engineering for longer than either side probably realises.",
  "I'm based in London. I think in systems, work in B2B, and occasionally find the whole thing genuinely funny.",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-[1320px] px-6 md:px-12">
        <section className="pt-24 md:pt-40 pb-12 md:pb-16">
          <h1 className="font-editorial text-[56px] md:text-[112px] leading-[0.95] tracking-[-0.02em] text-[hsl(var(--ink-strong))]">
            About
          </h1>
          <p className="mt-10 md:mt-14 max-w-2xl font-editorial text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.005em] text-[hsl(var(--ink-body))]">
            {story[0]}
          </p>
        </section>

        <hr className="border-[hsl(var(--hairline))]" />

        <section className="pt-14 md:pt-20 pb-20 md:pb-28">
          <article className="max-w-[680px]">
            {story.slice(1).map((p, i) => (
              <p
                key={i}
                className="mb-6 text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]"
              >
                {p}
              </p>
            ))}

            <hr className="my-12 border-[hsl(var(--hairline))]" />

            {coda.map((p, i) => (
              <p
                key={i}
                className="mb-6 text-[17px] md:text-[18px] leading-[1.7] text-[hsl(var(--ink-body))]"
              >
                {p}
              </p>
            ))}
          </article>
        </section>
      </main>
    </div>
  );
}
