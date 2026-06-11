import { PageHeader, PageRule, PageShell } from "@/components/PageShell";

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

const coda =
  "Currently leading Product Design across EMEA and APAC at Secure Code Warrior, shaping product direction across governance, observability, learning, and risk.";

// Lines that should land with extra breathing room
const beats = new Set<string>([
  "And then, like all good origin stories, one followed us home.",
  "Naturally, I took it personally.",
  "It felt infinite. It felt powerful. It felt like cheating, somehow.",
]);

export default function About() {
  const [opener, ...rest] = story;
  const punchline = rest[rest.length - 1];
  const middle = rest.slice(0, -1);

  return (
    <PageShell>
      <PageHeader title="About" lede={coda} />

      <PageRule />

      <section className="pt-14 md:pt-20 pb-20 md:pb-28">
        <article className="max-w-[680px]">


          {/* Editorial opener: ~1.8–2x body */}
          <p className="font-editorial text-[28px] md:text-[36px] leading-[1.25] tracking-[-0.01em] text-[hsl(var(--ink-strong))] mb-14 md:mb-20">
            {opener}
          </p>

          {middle.map((p, i) => {
            const isBeat = beats.has(p);
            if (isBeat) {
              return (
                <p
                  key={i}
                  className="font-editorial italic text-[22px] md:text-[26px] leading-[1.35] text-[hsl(var(--ink-strong))] my-14 md:my-20"
                >
                  {p}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="mb-8 text-[17px] md:text-[18px] leading-[1.8] text-[hsl(var(--ink-body))]"
              >
                {p}
              </p>
            );
          })}

          {/* Punchline — warmer tone, more space above */}
          <p className="mt-14 md:mt-20 font-editorial italic text-[20px] md:text-[24px] leading-[1.4] text-[hsl(var(--accent-stone))]">
            {punchline}
          </p>

        </article>
      </section>
    </PageShell>
  );
}
