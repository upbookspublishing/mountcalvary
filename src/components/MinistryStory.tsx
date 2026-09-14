import communityImage from "@/assets/ministry-community.jpg";
import skylineImage from "@/assets/sao-paulo-cross.jpg";

const MinistryStory = () => (
  <>
    <section className="overflow-hidden bg-background">
      <div className="grid min-h-[680px] lg:grid-cols-2">
        <div className="relative min-h-[480px] lg:min-h-full">
          <img src={communityImage} alt="A multigenerational Christian ministry community" loading="lazy" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-6 py-16 md:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="eyebrow">A lasting legacy</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] text-foreground md:text-7xl">A church for the next generation.</h2>
            <p className="mt-7 text-lg leading-8 text-muted-foreground">Mount Calvary is a place to encounter Jesus, grow in purpose, serve our community, and carry the Gospel forward.</p>
            <p className="mt-6 border-l-2 border-primary pl-5 text-sm font-semibold uppercase tracking-[0.22em] text-foreground">Same Gospel. Greater reach.</p>
            <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
              {[
                ["Worship", "A welcoming church community."],
                ["Equip", "Discipleship for every generation."],
                ["Send", "Faith that reaches beyond our walls."],
              ].map(([title, text]) => <div key={title} className="bg-background p-5"><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative isolate overflow-hidden px-6 py-20 text-secondary-foreground md:py-28">
      <img src={skylineImage} alt="Cross overlooking the São Paulo skyline at sunset" loading="lazy" width={1920} height={800} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-secondary/80" />
      <blockquote className="mx-auto max-w-4xl text-center">
        <span className="font-display text-7xl leading-none text-primary">“</span>
        <p className="font-display text-3xl leading-tight md:text-5xl">Unless the Lord builds the house, the builders labor in vain.</p>
        <footer className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Psalm 127:1</footer>
      </blockquote>
    </section>
  </>
);

export default MinistryStory;