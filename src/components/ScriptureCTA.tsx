import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import skylineImage from "@/assets/sao-paulo-cross.jpg";

const ScriptureCTA = () => (
  <>
    <section className="relative isolate overflow-hidden px-5 py-20 text-secondary-foreground md:py-24">
      <img src={skylineImage} alt="Cross overlooking São Paulo at sunset" loading="lazy" width={1920} height={800} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-secondary/85" />
      <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <blockquote>
          <span className="font-display text-7xl leading-none text-primary" aria-hidden="true">“</span>
          <p className="-mt-4 font-display text-3xl leading-tight md:text-5xl">Unless the Lord builds the house, the builders labor in vain.</p>
          <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Psalm 127:1</footer>
        </blockquote>
        <p className="border-l border-primary pl-7 text-lg leading-8 text-secondary-foreground/80">This is not just a building project. It is a Kingdom assignment.</p>
      </div>
    </section>

    <section className="final-cta-bg bg-secondary px-5 py-24 text-center text-secondary-foreground md:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">A Miracle in Motion</p>
        <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] md:text-7xl">You Can Be Part of the Miracle.</h2>
        <p className="mt-5 font-display text-xl text-secondary-foreground/75">Pray. Give. Partner. Make a lasting impact.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild className="uppercase"><a href="#founding-partners">Become a Founding Partner <ArrowRight /></a></Button>
          <Button size="lg" variant="outline" asChild className="border-secondary-foreground/60 bg-transparent uppercase text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"><a href="#contact">Contact Us</a></Button>
        </div>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.24em] text-primary">For His Glory. For Our City. For Generations.</p>
      </div>
    </section>
  </>
);

export default ScriptureCTA;