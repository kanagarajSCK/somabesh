import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="venue" className="relative bg-surface-deeper text-primary-foreground pt-20 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-primary-foreground/10">
          <div>
            <h3 className="font-display font-bold text-2xl mb-4">INT Conference</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              The annual gathering for founders, operators, and creators shaping the next decade of business.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-smooth"
                  aria-label="social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider text-sm mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {["About", "Speakers", "Schedule", "Pricing", "Gallery"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-primary-foreground transition-smooth"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider text-sm mb-5">
              Venue
            </h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-3">
              Brogan Conference Center
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" />
                480 Brogan Points, Suite 766, Chester SD 84765
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-glow shrink-0" />
                +1 (605) 555-0122
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-glow shrink-0" />
                drkondurukranthikumar@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider text-sm mb-5">
              Newsletter
            </h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Get speaker announcements and early-bird offers in your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border border-primary-foreground/20"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 bg-primary text-primary-foreground text-sm font-display font-semibold uppercase tracking-wider hover:bg-primary-glow transition-smooth"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© 2026 INT Conference. All rights reserved.</p>
          <p>Crafted with care · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
