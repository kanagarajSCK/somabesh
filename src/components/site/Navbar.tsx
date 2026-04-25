import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-soft py-3"
          : "bg-primary/90 md:bg-primary py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="font-display text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
          INT conference
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium uppercase tracking-wide transition-smooth relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-primary-foreground after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border-2 border-primary-foreground text-primary-foreground text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-smooth"
          >
            Buy Ticket
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-primary-deep border-t border-primary-foreground/10 animate-fade-in-up">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/90 hover:text-primary-foreground py-3 text-sm font-medium uppercase tracking-wide border-b border-primary-foreground/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
