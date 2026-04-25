import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import s1 from "@/assets/speaker-1.jpg";
import s2 from "@/assets/speaker-2.jpg";
import s3 from "@/assets/speaker-3.jpg";
import s4 from "@/assets/speaker-4.jpg";
import s5 from "@/assets/speaker-5.jpg";
import s6 from "@/assets/speaker-6.jpg";

const speakers = [
  { img: s1, name: "Fatima Haussein", role: "Executive Mentor" },
  { img: s2, name: "Dyane More", role: "Growth Strategist" },
  { img: s3, name: "Karim Al-Hassan", role: "Head of Innovation" },
  { img: s4, name: "Robert Falken", role: "Venture Partner" },
  { img: s5, name: "Deixe Armostrong", role: "Product Lead" },
  { img: s6, name: "Rita Schimita", role: "Brand Director" },
];

const Speakers = () => {
  return (
    <section id="speakers" className="relative py-24 md:py-32 bg-surface-soft overflow-hidden">
      <div className="container relative">
        <div className="relative text-center mb-16">
          <span className="ghost-text">Speaker</span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="section-heading center text-3xl md:text-5xl text-foreground mb-8">
              Event Speakers
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-8">
              Meet the operators, founders, and thinkers leading sessions across all three days. Every talk is followed by a Q&amp;A and an open coffee circle.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {speakers.map((sp, i) => (
            <motion.div
              key={sp.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={sp.img}
                alt={sp.name}
                loading="lazy"
                width={600}
                height={600}
                className="w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/50 to-transparent opacity-0 group-hover:opacity-95 transition-smooth duration-500" />

              {/* Socials */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-smooth duration-500">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, j) => (
                  <a
                    key={j}
                    href="#"
                    className="w-9 h-9 rounded-full bg-primary-foreground/15 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
                    aria-label="social"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Name plate */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <div className="bg-primary text-primary-foreground p-4 translate-y-2 group-hover:translate-y-0 transition-smooth">
                  <h3 className="font-display font-bold text-lg leading-tight">{sp.name}</h3>
                  <p className="text-primary-foreground/80 text-xs uppercase tracking-wider mt-1">
                    {sp.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
