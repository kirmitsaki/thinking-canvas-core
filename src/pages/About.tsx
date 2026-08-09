import Seo from "@/components/Seo";
import computerStoryImage from "@/assets/90s-computer.jpg";

export default function About() {
  return (
    <main className="page-shell pt-10 pb-28">
      <Seo
        title="The first computer · Rachel Kirmitsaki"
        description="I grew up in the 90s, back when computers were still mysterious enough to feel like magic, but not yet friendly enough to pretend they weren't judging you."
        path="/about"
        ogType="article"
      />

      <article className="mx-auto max-w-[42rem]">
        <header className="mt-16 md:mt-20">
          <p className="label">The first computer</p>
          <h1 className="mt-4 font-serif text-[42px] leading-[1.04] tracking-tight md:text-[60px]">
            How a beige box on a designated desk turned into a career spent building little worlds
            inside a screen.
          </h1>
          <div aria-hidden className="mt-10 h-px w-24 bg-caramel" />
        </header>

        <figure className="about-story-image mt-14 md:mt-16">
          <img
            src={computerStoryImage}
            alt="A 1990s personal computer on a wooden desk"
            width={1600}
            height={1072}
            loading="eager"
            className="block w-full"
          />
        </figure>

        <div className="article-prose article-body mt-12">
          <p className="drop-cap">
            I grew up in the 90s, back when computers were still mysterious enough to feel like
            magic, but not yet friendly enough to pretend they weren't judging you.
          </p>
          <p className="mt-6">
            They had already infiltrated offices, quietly humming away in corners like oversized
            calculators, but at home they were just making their grand debut. Families didn't have
            computers yet; they hosted them, like slightly intimidating guests.
          </p>
          <p className="mt-6">
            My father, sensing destiny (or at least a fun Saturday afternoon), took me to one of the
            first tech expos in our city. It was chaos in the best way: blinking lights, clunky
            hardware, and software demos that felt like peeking into the future, if the future ran on
            floppy disks and optimism.
          </p>
          <p className="mt-6">
            I wandered around pressing buttons with the confidence of someone who has absolutely no
            idea what they're doing but is determined to do it anyway. Screens lit up. Things
            happened. I didn't understand any of it, but I was having the time of my life interacting
            with what I firmly believed were unusually talented televisions.
          </p>
          <p className="mt-6">And then, like all good origin stories, one followed us home.</p>

          <p aria-hidden className="section-break">
            ⁘
          </p>

          <h2 className="font-serif text-[28px] leading-[1.15] tracking-tight md:text-[34px]">
            The desk had its own ecosystem
          </h2>
          <p className="mt-6">
            The computer was given its own sacred territory: the computer desk. This wasn't just
            furniture; it was an ecosystem. There was a designated shelf for the keyboard, a throne
            for the bulky monitor (a cube with ambitions), and a carefully arranged sprawl of cables
            and components that looked important enough to never question.
          </p>
          <p className="mt-6">
            It was off-white in that very specific way that suggested it had already lived a full
            life before meeting us. It made sounds: whirs, clicks, occasional existential sighs. The
            keyboard was enormous, a sprawling landscape my small hands could barely navigate. I
            typed using my two index fingers, like a very determined woodpecker.
          </p>
          <p className="mt-6">
            And the layout, oh, the layout. The letters were scattered in what felt like a personal
            attack against the alphabet I had so recently mastered. I had just learned that A comes
            before B, B before C: order, logic, beauty.
          </p>

          <figure className="my-20 text-center">
            <span aria-hidden className="ornament mb-6 block text-2xl">
              ❦
            </span>
            <blockquote className="font-serif text-[26px] italic leading-[1.32] tracking-tight md:text-[34px]">
              And now here was this machine insisting, no, chaos is the system.
            </blockquote>
            <figcaption className="label-quiet mt-6">Naturally, I took it personally</figcaption>
          </figure>

          <h2 className="font-serif text-[28px] leading-[1.15] tracking-tight md:text-[34px]">
            An encyclopaedia, and everything in it
          </h2>
          <p className="mt-6">
            One of the first pieces of software my father installed was an encyclopaedia. It quickly
            became my second favourite game. With a single click, well, several slow, deliberate,
            slightly inaccurate clicks, I could access everything. Information about the world,
            neatly packaged into digital pages. I would scroll, click, open, and wander through
            topics with no real plan, just curiosity and the occasional accidental discovery.
          </p>
          <p className="mt-6">It felt infinite. It felt powerful. It felt like cheating, somehow.</p>
          <p className="mt-6">
            Looking back, I think that was the moment. Not a grand revelation, no dramatic lightning
            strike. Just a child, a clunky computer, and the intoxicating realisation that you could
            build little worlds inside a box and invite others to explore them.
          </p>
          <p className="mt-6">
            Which, in hindsight, is a very reasonable way to end up making tech products.
          </p>
        </div>

        <p aria-hidden className="section-break mt-16">
          ⁘
        </p>
      </article>
    </main>
  );
}
