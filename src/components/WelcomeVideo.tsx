import { Play } from "lucide-react";

const WelcomeVideo = () => (
  <section id="welcome" className="bg-background py-20 md:py-28">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-10 grid gap-6 border-l-2 border-primary pl-6 md:grid-cols-[1fr_1fr] md:items-end md:pl-10">
        <div>
          <p className="eyebrow">A welcome from Mount Calvary</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-foreground md:text-6xl">
            Come and see what God is doing in São Paulo.
          </h2>
        </div>
        <p className="max-w-lg text-base leading-7 text-muted-foreground md:justify-self-end md:text-lg">
          Meet our ministry, hear our heart, and discover a church committed to worship, discipleship, and the next generation.
        </p>
      </div>

      <div className="group relative aspect-video overflow-hidden border border-border bg-secondary shadow-2xl">
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/vN7_o21yfYI"
          title="Welcome to Mount Calvary COGIC in São Paulo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 bg-background/90 px-3 py-2 text-xs font-semibold uppercase text-foreground shadow-sm md:left-8 md:top-8">
          <Play className="h-3 w-3 fill-primary text-primary" /> Welcome message
        </div>
      </div>
    </div>
  </section>
);

export default WelcomeVideo;