import { ArrowRight, BookOpen, Church, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const campaign = {
  goal: "U$ 128,000",
  raised: "U$ 39,600",
  percentage: 31,
};

const pillars = [
  { icon: Church, title: "A Place to Worship", text: "A welcoming home for our church and community." },
  { icon: BookOpen, title: "A Place to Equip", text: "Discipleship, leadership development, and resources for every generation." },
  { icon: Globe2, title: "A Place to Send", text: "From São Paulo to the nations, raising leaders who make a Kingdom impact." },
];

const Campaign = () => (
  <section id="the-miracle" className="bg-background py-20 md:py-28">
    <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="eyebrow">Be a Founding Partner</p>
          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-7xl">Help Us Complete This Miracle.</h2>
        </div>
        <p className="border-l border-primary pl-6 text-lg leading-8 text-muted-foreground">This is not just a building project. It is a Kingdom assignment. Together, we are building a place where lives will be transformed, leaders will be equipped, and generations will be reached.</p>
      </div>

      <div className="mt-12 border border-border bg-card p-6 shadow-xl md:p-9">
        <div className="flex flex-col gap-3 text-sm font-semibold uppercase text-foreground sm:flex-row sm:justify-between">
          <span>Raised: <span className="text-primary">{campaign.raised}</span></span>
          <span>Yearly Goal: <span className="text-primary">{campaign.goal}</span></span>
        </div>
        <div className="mt-5 h-4 overflow-hidden bg-muted" role="progressbar" aria-label="Campaign fundraising progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={campaign.percentage}>
          <div className="h-full bg-primary transition-all duration-700" style={{ width: `${campaign.percentage}%` }} />
        </div>
        <p className="mt-3 text-right text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">[Editable Percentage]% Complete</p>

        <div className="mt-9 grid gap-px bg-border md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article key={title} className="bg-card p-7 text-center">
              <Icon className="mx-auto h-9 w-9 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl uppercase text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild className="uppercase"><a href="#founding-partners">Become a Founding Partner <ArrowRight /></a></Button>
          <Button size="lg" variant="outline" asChild className="uppercase"><a href="#partner-meaning">Learn More About the Campaign</a></Button>
        </div>
      </div>
    </div>
  </section>
);

export default Campaign;