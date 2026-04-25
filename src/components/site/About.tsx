import { motion } from "framer-motion";
import { Clock, MapPin, Mic } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const info = [
  {
    icon: Clock,
    title: "Date & Time",
    lines: ["11:30 AM – 5:30 PM", "October 15 – 18, 2026"],
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["480 Brogan Points, Suite 766", "Powowski Chester, SD 84765"],
  },
  {
    icon: Mic,
    title: "Speakers",
    lines: ["25 speakers participating", "Industry-leading mentors"],
  },
];

const services = [
  { img: service1, title: "Our Event Goal", text: "Empower founders, executives, and creators with frameworks they can ship the very next morning." },
  { img: service2, title: "25 Top Speakers", text: "Hand-picked operators from Fortune 500s and breakout startups, sharing what actually moved the needle." },
  { img: service3, title: "Media Coverage", text: "Live coverage by major industry press, with on-site photographers and broadcast crews." },
  { img: service4, title: "Attendee Network", text: "Over 2,400 verified attendees from 38 countries — your next co-founder, hire, or customer is here." },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-soft overflow-hidden">
      <div className="container relative">
        {/* Info row */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 pb-20 md:pb-28 border-b border-border">
          {info.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-start gap-5"
            >
              <div className="shrink-0 w-14 h-14 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-bold uppercase text-foreground tracking-wide mb-2">
                  {item.title}
                </h3>
                {item.lines.map((l) => (
                  <p key={l} className="text-muted-foreground text-sm leading-relaxed">
                    {l}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Heading with ghost text */}
        <div className="relative pt-20 md:pt-28 pb-14 text-center">
          <span className="ghost-text">About</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative font-display font-extrabold text-3xl md:text-5xl text-foreground max-w-4xl mx-auto leading-tight text-balance"
          >
            We provide a variety of services for you. All of ours come with a{" "}
            <span className="text-primary">100% satisfaction</span> guarantee.
          </motion.h2>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 md:p-7 text-center">
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
