import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingUrl from "@/assets/hero-building.png";

const Hero = () => (
  <section id="home" className="relative flex min-h-[760px] items-end overflow-hidden bg-secondary pt-[84px] text-secondary-foreground lg:h-[clamp(625px,43.9vw,760px)] lg:min-h-[625px] lg:pt-[116px]">
    <img src={buildingUrl} alt="Mount Calvary church building in São Paulo" width={1754} height={768} className="absolute inset-0 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 bg-hero-overlay" />

    <div className="relative z-10 mx-auto flex h-full w-full max-w-[1365px] flex-col px-5 pb-8 pt-10 lg:px-[52px] lg:pb-[54px] lg:pt-[48px]">
      <div className="max-w-[630px] animate-fade-in lg:max-w-[670px]">
        <p className="eyebrow">Faith builds generations</p>
        <h1 className="mt-4 font-display text-[54px] font-bold uppercase leading-[0.82] sm:text-7xl lg:text-[88px]">
          <span className="block text-secondary-foreground">A Miracle</span>
          <span className="block text-primary">In Motion</span>
        </h1>
        <p className="mt-5 max-w-[510px] font-display text-base leading-6 text-secondary-foreground/95 sm:text-lg sm:leading-7 lg:text-[20px]">
          God is opening a new chapter for Mount Calvary COGIC. A permanent home to worship, equip, and impact our community and the world for His Kingdom.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild className="h-14 px-6 uppercase">
            <a href="#founding-partners">Become a Founding Partner <ArrowRight /></a>
          </Button>
          <Button size="lg" variant="outline" asChild className="h-14 border-secondary-foreground/80 bg-secondary/20 px-5 uppercase text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            <a href="#our-story"><PlayCircle /> Discover the Story</a>
          </Button>
        </div>
      </div>

      <p className="absolute right-[5%] top-[39%] hidden max-w-[190px] rotate-[-4deg] text-right font-script text-[32px] leading-[1.35] text-secondary-foreground lg:block">
        For His Glory<br />For Our City<br />For Generations
      </p>

      <p className="absolute right-[4%] top-[19%] hidden text-right text-[11px] font-medium uppercase leading-[1.8] tracking-[0.38em] text-secondary-foreground xl:block">
        Same<br />Mission.<br />A Bigger<br />Impact.
      </p>

      <div className="mt-auto grid max-w-[470px] grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 pt-7 text-[8px] font-semibold uppercase leading-4 tracking-[0.22em] text-secondary-foreground sm:text-[9px]">
        <span>A stronger<br />church</span>
        <span className="h-6 w-px bg-primary" aria-hidden="true" />
        <span className="text-center">A brighter<br />community</span>
        <span className="h-6 w-px bg-primary" aria-hidden="true" />
        <span className="text-right">A greater<br />tomorrow</span>
      </div>
    </div>
  </section>
);

export default Hero;