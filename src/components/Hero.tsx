import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingAsset from "@/assets/mount-calvary-building.png.asset.json";

const Hero = () => (
  <section id="home" className="relative flex min-h-[760px] items-end overflow-hidden bg-secondary pt-[76px] text-secondary-foreground lg:min-h-[880px]">
    <img src={buildingAsset.url} alt="Mount Calvary church building in São Paulo" width={727} height={420} className="absolute inset-0 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 bg-hero-overlay" />

    <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-10 pt-28 lg:px-8 lg:pb-12">
      <div className="max-w-3xl animate-fade-in">
        <p className="eyebrow">Faith builds generations</p>
        <h1 className="mt-5 font-display text-6xl font-bold uppercase leading-[0.82] sm:text-7xl lg:text-[106px]">
          <span className="block text-secondary-foreground">A Miracle</span>
          <span className="block text-primary">In Motion</span>
        </h1>
        <p className="mt-7 max-w-xl font-display text-lg leading-7 text-secondary-foreground/90 sm:text-xl sm:leading-8">
          God is opening a new chapter for Mount Calvary COGIC. A permanent home to worship, equip, and impact our community and the world for His Kingdom.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild className="uppercase">
            <a href="#founding-partners">Become a Founding Partner <ArrowRight /></a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-secondary-foreground/60 bg-secondary/25 uppercase text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            <a href="#our-story"><PlayCircle /> Discover Our Story <ArrowRight /></a>
          </Button>
        </div>
      </div>

      <p className="mt-12 hidden max-w-[170px] justify-self-end border-r border-primary pr-5 text-right font-display text-xl italic leading-8 text-secondary-foreground/90 lg:block">
        For His Glory.<br />For Our City.<br />For Generations.
      </p>

      <div className="mt-14 grid max-w-2xl grid-cols-3 border-t border-secondary-foreground/30 pt-5 text-[8px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/70 sm:text-[10px] sm:tracking-[0.24em]">
        <span>A stronger church</span>
        <span className="text-center">A brighter community</span>
        <span className="text-right">A greater tomorrow</span>
      </div>
    </div>
  </section>
);

export default Hero;