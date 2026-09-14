import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  ["Worship", "A place to encounter God."],
  ["Equip", "A place to grow in faith and leadership."],
  ["Send", "A place to impact our city and the nations."],
];

const MinistryStory = () => (
  <section id="leadership" className="overflow-hidden bg-card">
    <div className="mx-auto grid min-h-[720px] max-w-[1440px] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative flex min-h-[460px] items-end overflow-hidden bg-secondary px-8 py-12 text-secondary-foreground md:px-14 lg:min-h-full">
        <div className="absolute inset-0 leadership-pattern opacity-70" aria-hidden="true" />
        <div className="relative max-w-lg">
          <div className="flex h-16 w-16 items-center justify-center border border-primary text-3xl text-primary" aria-hidden="true">✝</div>
          <p className="mt-8 font-display text-3xl leading-tight">Official pastoral portrait</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-secondary-foreground/65">Bishop Eneas Francisco &amp; Missionary Evangelist Vand Pires</p>
          <p className="mt-7 border-l border-primary pl-4 text-xs uppercase tracking-[0.2em] text-primary">Portrait ready for the official uploaded photograph</p>
        </div>
      </div>

      <div className="flex items-center px-5 py-20 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <p className="eyebrow">A lasting legacy</p>
          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-7xl">A House for the Next Generation</h2>
          <div className="mt-7 h-px w-20 bg-primary" />
          <p className="mt-7 text-lg leading-8 text-muted-foreground">Mount Calvary is more than a building. It is a place where people encounter Jesus, families are strengthened, leaders are equipped, and generations are prepared to make a greater impact for the Kingdom of God.</p>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">Under the leadership of Bishop Eneas Francisco and Missionary Evangelist Vand Pires, we are building a future rooted in faith, service, and purpose.</p>

          <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
            {values.map(([title, description]) => (
              <div key={title} className="bg-card p-5">
                <h3 className="font-display text-xl uppercase text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          <Button variant="link" asChild className="mt-8 h-auto p-0 uppercase text-foreground">
            <a href="#the-miracle">Discover the miracle <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default MinistryStory;