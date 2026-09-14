import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import leadersAsset from "@/assets/pastoral-leaders-wide.png.asset.json";

const values = [
  ["Worship", "A place to encounter God."],
  ["Equip", "A place to grow in faith and leadership."],
  ["Send", "A place to impact our city and the nations."],
];

const MinistryStory = () => (
  <section id="leadership" className="overflow-hidden bg-card">
    <div className="mx-auto grid min-w-0 min-h-[720px] max-w-[1440px] lg:grid-cols-[0.95fr_1.05fr]">
      <div className="relative min-h-[440px] min-w-0 overflow-hidden bg-secondary sm:min-h-[520px] lg:min-h-full">
        <img src={leadersAsset.url} alt="Bishop Eneas Francisco and Missionary Evangelist Vand Pires" width={620} height={482} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_18%] lg:object-center" />
        <div className="absolute inset-x-0 bottom-0 bg-leadership-overlay px-6 pb-7 pt-28 text-secondary-foreground md:px-10">
          <p className="font-display text-2xl">Bishop Eneas Francisco &amp; Missionary Evangelist Vand Pires</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Pastoral Leadership</p>
        </div>
      </div>

      <div className="flex min-w-0 items-center px-5 py-20 md:px-12 lg:px-20">
        <div className="min-w-0 max-w-2xl">
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