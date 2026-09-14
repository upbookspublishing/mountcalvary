import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/mount-calvary-hero.jpg";
const Hero = () => {
  return <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-secondary pt-20 text-secondary-foreground">
      <img src={heroImage} alt="Church in São Paulo at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container relative z-10 mx-auto px-6 pb-16 pt-28 md:pb-20 md:pt-40">
        <div className="max-w-4xl">
          <p className="eyebrow text-primary">Faith builds generations</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] md:text-7xl lg:text-8xl">
            A ministry <span className="text-primary">in motion.</span>
          </h1>
          <p className="mt-7 max-w-2xl font-display text-xl leading-8 text-secondary-foreground/90 md:text-2xl">
            Discover what the Lord is doing through the ministry of Mount Calvary COGIC in São Paulo, Brazil.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="h-13 px-7 uppercase"><a href="#welcome">Watch our welcome <PlayCircle /></a></Button>
            <Button size="lg" variant="outline" asChild className="h-13 border-secondary-foreground/60 bg-secondary/20 px-7 uppercase text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"><a href="#books">Explore the ministry <ArrowRight /></a></Button>
          </div>
        </div>
        <div className="mt-16 grid max-w-2xl grid-cols-3 border-t border-secondary-foreground/30 pt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary-foreground/70 md:text-xs">
          <span>A people</span><span className="text-center">A purpose</span><span className="text-right">A greater tomorrow</span>
        </div>
      </div>
    </section>;
};
export default Hero;