import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [["Welcome", "#welcome"], ["Books", "#books"], ["Magazine", "#magazine"]];
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/25 bg-secondary/95 text-secondary-foreground backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3" aria-label="Mount Calvary COGIC home">
            <div className="flex h-10 w-10 items-center justify-center border border-primary text-primary">
              <span className="font-display text-xl">✝</span>
            </div>
            <span className="font-display text-base leading-tight sm:text-xl">Mount Calvary COGIC <small className="block font-body text-[9px] uppercase tracking-[0.28em] text-secondary-foreground/60">São Paulo, Brazil</small></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-secondary-foreground/75 transition-colors hover:text-primary">{label}</a>)}
            <Button asChild><a href="#magazine">Subscribe</a></Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-primary md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="border-t border-secondary-foreground/10 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {links.map(([label, href]) => <a key={href} href={href} onClick={() => setIsMenuOpen(false)} className="py-2 text-secondary-foreground/80 hover:text-primary">{label}</a>)}
              <Button asChild className="mt-2 w-full"><a href="#magazine">Subscribe</a></Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;