import { Button } from "@/components/ui/button";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">✝</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">Mount Calvary COGIC Brazil</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#video" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Watch
            </a>
            <a href="#books" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Books
            </a>
            <a href="#magazine" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Magazine
            </a>
            <Button>Subscribe</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a href="#video" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Watch
              </a>
              <a href="#books" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Books
              </a>
              <a href="#magazine" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Magazine
              </a>
              <Button className="w-full mt-2">Subscribe</Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;