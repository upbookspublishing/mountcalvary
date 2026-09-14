import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/mount-calvary-logo.png.asset.json";

const Footer = () => (
  <footer id="contact" className="border-t border-primary/25 bg-secondary py-14 text-secondary-foreground">
    <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-card p-1"><img src={logoAsset.url} alt="Mount Calvary COGIC logo" width={40} height={40} className="h-full w-full object-contain" /></div>
            <div><p className="font-display text-xl">Mount Calvary Church of God in Christ</p><p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-secondary-foreground/60">São Paulo, Brazil — First Jurisdiction</p></div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-secondary-foreground/65">Building a place where lives are transformed, leaders are equipped, and generations are reached.</p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-secondary-foreground/70">
            <a href="#our-story" className="hover:text-primary">Our Story</a><a href="#the-miracle" className="hover:text-primary">The Miracle</a><a href="#founding-partners" className="hover:text-primary">Founding Partners</a>
          </div>
        </nav>
        <div>
          <Button asChild className="w-full uppercase"><a href="#founding-partners">Be a Founding Partner</a></Button>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, index) => <a key={index} href="#contact" aria-label={["Facebook", "Instagram", "YouTube"][index]} className="flex h-9 w-9 items-center justify-center border border-secondary-foreground/25 text-secondary-foreground/65 transition hover:border-primary hover:text-primary"><Icon className="h-4 w-4" /></a>)}
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-secondary-foreground/15 pt-6 text-xs text-secondary-foreground/50 sm:flex-row sm:justify-between"><p>© 2026 Mount Calvary COGIC. All rights reserved.</p><p>A Miracle in Motion</p></div>
    </div>
  </footer>
);

export default Footer;