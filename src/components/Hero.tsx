import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Transforming Lives Through Faith</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Discover what the Lord is doing through the ministry of{" "}
            <span className="text-primary relative">
              Mount Calvary COGIC
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
              </svg>
            </span>{" "}
            in São Paulo, Brazil
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">​Be a part of what the Lord is doing through Mount Calvary                             </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="default" size="lg" className="text-lg px-8">
              Watch Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Explore Resources
            </Button>
          </div>
        </div>

        {/* Featured Video */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/50 bg-card">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/vN7_o21yfYI"
              title="Mount Calvary COGIC Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;