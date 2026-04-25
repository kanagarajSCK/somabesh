import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Standard",
    price: 99,
    features: ["3-day pass", "Access to all keynotes", "Coffee & lunch included", "Conference swag bag"],
    featured: false,
  },
  {
    name: "Premium",
    price: 199,
    features: [
      "Everything in Standard",
      "Front-row reserved seating",
      "Workshop access (4 sessions)",
      "Speaker meet & greet",
      "Recorded session library",
    ],
    featured: true,
  },
  {
    name: "VIP",
    price: 399,
    features: [
      "Everything in Premium",
      "Private VIP lounge access",
      "Dinner with select speakers",
      "1:1 mentor matching",
      "Lifetime recordings access",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-heading center text-3xl md:text-5xl text-foreground">
            Pricing Plans
          </h2>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            Choose the experience that fits your goals. Group rates available for teams of 5 or more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative p-8 md:p-10 border transition-smooth ${
                t.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-elegant md:-mt-4 md:mb-4"
                  : "bg-card text-foreground border-border shadow-card hover:-translate-y-2"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-foreground text-primary px-4 py-1 text-xs font-display font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3
                className={`font-display font-bold text-2xl uppercase tracking-wide ${
                  t.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {t.name}
              </h3>
              <div className="my-6 flex items-baseline gap-1">
                <span className="text-2xl font-display font-bold opacity-80">$</span>
                <span className="text-6xl font-display font-extrabold leading-none">{t.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        t.featured ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span className={t.featured ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3.5 font-display font-semibold uppercase tracking-wider text-sm transition-smooth ${
                  t.featured
                    ? "bg-primary-foreground text-primary hover:bg-primary-glow hover:text-primary-foreground"
                    : "bg-primary text-primary-foreground hover:bg-primary-deep"
                }`}
              >
                Get Ticket
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
