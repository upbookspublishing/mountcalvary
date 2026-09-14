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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-secondary-foreground/10 bg-secondary/80 text-secondary-foreground backdrop-blur-md lg:absolute lg:bg-secondary/15 lg:backdrop-blur-[2px]">
      <div className="mx-auto flex h-[84px] max-w-[1365px] items-center justify-between px-5 lg:h-[116px] lg:px-[52px]">
        <a href="#home" className="flex min-w-0 items-center gap-4" aria-label="Mount Calvary COGIC home">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center lg:h-[86px] lg:w-[86px]">
            <img src={logoAsset.url} alt="Mount Calvary COGIC logo" width={86} height={86} className="h-full w-full object-contain" />
          </div>
          <span className="min-w-0 font-display text-[15px] leading-tight sm:text-lg lg:text-[24px]">
            <span className="hidden sm:inline">Mount Calvary Church of God in Christ</span>
            <span className="sm:hidden">Mount Calvary COGIC</span>
            <small className="mt-1.5 block truncate font-body text-[7px] font-medium uppercase tracking-[0.22em] text-secondary-foreground/80 sm:text-[8px] lg:text-[9px] lg:tracking-[0.3em]">
              SÃO PAULO, BRAZIL — FIRST JURISDICTION
            </small>
          </span>
        </a>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={`border-b-2 py-2 text-xs font-medium transition-colors hover:text-primary ${href === "#home" ? "border-primary text-primary" : "border-transparent text-secondary-foreground/90"}`}>
              {label}
            </a>
          ))}
          <Button asChild className="ml-2 h-11 px-6 uppercase tracking-wide">
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