import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeVideo = () => (
  <section id="our-story" className="bg-background py-20 md:py-28">
    <div className="mx-auto grid max-w-[1280px] gap-12 px-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-8">
      <div className="relative border border-primary/35 bg-secondary p-2 shadow-2xl md:p-3">
        <div className="aspect-video overflow-hidden bg-secondary">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Bri1oHCOJ3U"
            title="Welcome to Mount Calvary COGIC"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <span className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-primary/30" aria-hidden="true" />
      </div>

      <div>
        <p className="eyebrow">Welcome to Mount Calvary</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">A place to worship. A family to belong to. A mission to fulfill.</h2>
        <div className="mt-6 h-px w-20 bg-primary" />
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Welcome to Mount Calvary Church of God in Christ, where faith comes alive, lives are transformed, and generations are equipped to fulfill their God-given purpose.
        </p>
        <Button variant="link" asChild className="mt-6 h-auto p-0 uppercase text-foreground">
          <a href="#leadership">Learn more about our church <ArrowRight /></a>
        </Button>
      </div>
    </div>
  </section>
);

export default WelcomeVideo;