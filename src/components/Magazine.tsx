import { Button } from "@/components/ui/button";
import magazineCover from "@/assets/magazine-cover.jpeg";

const Magazine = () => {
  return <section id="magazine" className="relative overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="eyebrow text-primary">Digital Magazine</span>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">Legacy Ministry Magazine<br />
                <span className="text-primary">Stories of faith. A vision for tomorrow.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-secondary-foreground/70">Our digital magazine brings you inspiring testimonies, biblical teaching, and an opportunity to sow into Mount Calvary's new season.</p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[{
              icon: "📖",
                text: "Biblical teaching and devotionals"
            }, {
              icon: "✨",
              text: "Inspiring testimonies from our community"
            }, {
              icon: "👨‍👩‍👧‍👦",
              text: "Stories from Mount Calvary in Brazil"
            }, {
              icon: "🎯",
              text: "Ways to support the ministry's next chapter"
            }].map((feature, index) => <div key={index} className="flex items-center gap-4 border-b border-secondary-foreground/15 py-4">
                  <span className="text-xl">{feature.icon}</span>
                  <span className="font-medium text-secondary-foreground">{feature.text}</span>
                </div>)}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="px-8 uppercase">
                Subscribe now
              </Button>
            </div>
          </div>

          {/* Magazine Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Magazine */}
              <div className="relative z-20 aspect-[3/4] overflow-hidden border border-primary/30 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                <img 
                  src={magazineCover} 
                  alt="Legacy Ministry Magazine Cover" 
                  className="w-full h-full object-cover"
                />
              </div>

               <div className="absolute -bottom-5 -right-5 z-10 h-full w-full border border-primary/25" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Magazine;