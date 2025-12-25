import { Button } from "@/components/ui/button";

const Magazine = () => {
  return (
    <section id="magazine" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Digital Magazine</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Faith & Life<br />
                <span className="text-primary">Monthly Magazine</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our digital magazine brings you inspiring testimonies, biblical teachings, 
                family devotionals, and practical wisdom for living out your faith every month.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: "📖", text: "In-depth Bible studies and devotionals" },
                { icon: "✨", text: "Inspiring testimonies from believers worldwide" },
                { icon: "👨‍👩‍👧‍👦", text: "Family-focused articles and activities" },
                { icon: "🎯", text: "Practical faith applications for daily life" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8">
                Subscribe Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Preview Latest Issue
              </Button>
            </div>
          </div>

          {/* Magazine Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Magazine */}
              <div className="relative z-20 aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 shadow-2xl shadow-primary/30 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-primary-foreground">
                  <div>
                    <p className="text-sm font-medium opacity-80 tracking-wider">DECEMBER 2024</p>
                    <h3 className="font-display text-3xl font-bold mt-2">Faith & Life</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-px bg-primary-foreground/30" />
                    <p className="text-xl font-display font-semibold">The Gift of Christmas</p>
                    <p className="text-sm opacity-80">Finding hope and joy in the season of giving</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs">Devotionals</span>
                      <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs">Family</span>
                      <span className="px-3 py-1 bg-primary-foreground/20 rounded-full text-xs">Testimonies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Magazines */}
              <div className="absolute top-4 -left-4 z-10 w-full aspect-[3/4] rounded-2xl bg-accent border border-border/50 transform -rotate-6" />
              <div className="absolute top-8 -left-8 z-0 w-full aspect-[3/4] rounded-2xl bg-secondary border border-border/50 transform -rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magazine;
