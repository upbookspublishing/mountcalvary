import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-secondary py-16 text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-primary">
                  <span className="font-display text-lg text-primary">✝</span>
              </div>
              <span className="font-display text-xl">Mount Calvary COGIC</span>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed">
              Serving São Paulo, equipping believers, and sharing the Gospel across generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Welcome", "Our Books", "Magazine"].map((link) => (
                <li key={link}>
                   <a href={`#${link === "Our Books" ? "books" : link.toLowerCase()}`} className="text-secondary-foreground/70 transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Stay Connected</h4>
            <p className="text-background/70 text-sm mb-4">
              Get weekly inspiration delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <Button 
                type="submit"
                 className="w-full"
              >
                Subscribe
               </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
          <p>© 2026 Mount Calvary COGIC Brazil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
