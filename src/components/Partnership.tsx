import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Help establish a permanent home for worship.",
  "Support the growth and equipping of future leaders.",
  "Become part of a lasting Kingdom legacy.",
];

const Partnership = () => (
  <>
    <section id="partner-meaning" className="bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="eyebrow">A lasting Kingdom legacy</p>
          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] md:text-7xl">Your Partnership Is Part of the Miracle.</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-secondary-foreground/70">Founding Partners are people who believe in the vision God has given Mount Calvary and choose to invest in the future of the church, our city, and the generations to come.</p>
          <Button asChild size="lg" className="mt-8 uppercase"><a href="#founding-partners">I Want to Be a Founding Partner <ArrowRight /></a></Button>
        </div>
        <div className="border-y border-primary/35">
          {benefits.map((benefit, index) => (
            <div key={benefit} className="flex gap-5 border-b border-secondary-foreground/15 py-7 last:border-b-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary text-primary"><Check className="h-4 w-4" /></span>
              <div><span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">0{index + 1}</span><p className="mt-2 font-display text-xl">{benefit}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="founding-partners" className="bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="eyebrow">Founding Partners</p>
          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] text-foreground md:text-6xl">Take Your Next Step.</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">The partnership and giving form will live here. Share your interest now, and this area can later connect securely to giving options, campaign updates, and testimonies.</p>
          <p className="mt-7 border-l border-primary pl-5 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Pray. Give. Partner.</p>
        </div>

        <form className="border border-border bg-background p-6 shadow-lg md:p-9" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-foreground">Name<input type="text" className="mt-2 w-full border border-input bg-card px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Your name" /></label>
            <label className="text-sm font-semibold text-foreground">Email<input type="email" className="mt-2 w-full border border-input bg-card px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-1 focus:ring-primary" placeholder="you@example.com" /></label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-foreground">I am interested in<select className="mt-2 w-full border border-input bg-card px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-1 focus:ring-primary" defaultValue=""><option value="" disabled>Select an option</option><option>Becoming a Founding Partner</option><option>Receiving campaign updates</option><option>Learning about giving options</option><option>Praying for the campaign</option></select></label>
          <label className="mt-5 block text-sm font-semibold text-foreground">Message<textarea className="mt-2 min-h-28 w-full resize-y border border-input bg-card px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-1 focus:ring-primary" placeholder="How would you like to partner?" /></label>
          <Button type="submit" size="lg" disabled className="mt-6 w-full uppercase">Partnership Form Coming Soon</Button>
          <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">Secure giving and message delivery will be connected here.</p>
        </form>
      </div>
    </section>
  </>
);

export default Partnership;