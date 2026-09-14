import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/mount-calvary-logo.png.asset.json";

const links = [
  ["Home", "#home"],
  ["Our Story", "#our-story"],
  ["The Miracle", "#the-miracle"],
  ["Founding Partners", "#founding-partners"],
  ["Contact", "#contact"],
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/25 bg-secondary/95 text-secondary-foreground shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Mount Calvary COGIC home">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-card p-1">
            <img src={logoAsset.url} alt="Mount Calvary COGIC logo" width={40} height={40} className="h-full w-full object-contain" />
          </div>
          <span className="min-w-0 font-display text-base leading-tight sm:text-lg">
            Mount Calvary COGIC
            <small className="mt-1 block truncate font-body text-[8px] font-medium uppercase tracking-[0.18em] text-secondary-foreground/65 sm:text-[9px]">
              São Paulo, Brazil — First Jurisdiction
            </small>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-medium text-secondary-foreground/75 transition-colors hover:text-primary">
              {label}
            </a>
          ))}
          <Button asChild size="sm" className="uppercase tracking-wide">
            <a href="#founding-partners">Be a Founding Partner</a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-primary xl:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isOpen && (
        <div className="border-t border-secondary-foreground/10 bg-secondary px-5 py-5 xl:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setIsOpen(false)} className="border-b border-secondary-foreground/10 py-3 text-sm text-secondary-foreground/85">
                {label}
              </a>
            ))}
            <Button asChild className="mt-5 uppercase">
              <a href="#founding-partners" onClick={() => setIsOpen(false)}>Be a Founding Partner</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;