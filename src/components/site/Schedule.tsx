import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Mic } from "lucide-react";
import s1 from "@/assets/speaker-1.jpg";
import s2 from "@/assets/speaker-2.jpg";
import s3 from "@/assets/speaker-3.jpg";
import s4 from "@/assets/speaker-4.jpg";
import s5 from "@/assets/speaker-5.jpg";
import s6 from "@/assets/speaker-6.jpg";

type Slot = { img: string; name: string; role: string; time: string; topic: string };

const days: { date: string; slots: Slot[] }[] = [
  {
    date: "15 Oct 2026",
    slots: [
      { img: s2, name: "Dyane More", role: "Growth Strategist", time: "9:00 – 10:30", topic: "Opening keynote · The next decade of digital business" },
      { img: s1, name: "Fatima Haussein", role: "Executive Mentor", time: "11:00 – 12:15", topic: "Building durable teams under pressure" },
      { img: s3, name: "Karim Al-Hassan", role: "Head of Innovation", time: "14:00 – 15:30", topic: "Designing products that scale globally" },
      { img: s6, name: "Rita Schimita", role: "Brand Director", time: "16:00 – 17:30", topic: "Brand systems for high-growth companies" },
    ],
  },
  {
    date: "16 Oct 2026",
    slots: [
      { img: s4, name: "Robert Falken", role: "Venture Partner", time: "9:00 – 10:30", topic: "Capital, conviction, and founder fit" },
      { img: s5, name: "Deixe Armostrong", role: "Product Lead", time: "11:00 – 12:15", topic: "From zero to one — playbooks that ship" },
      { img: s2, name: "Dyane More", role: "Growth Strategist", time: "14:00 – 15:30", topic: "Compounding growth without paid ads" },
      { img: s1, name: "Fatima Haussein", role: "Executive Mentor", time: "16:00 – 17:30", topic: "Hiring for leverage, not headcount" },
    ],
  },
  {
    date: "17 Oct 2026",
    slots: [
      { img: s3, name: "Karim Al-Hassan", role: "Head of Innovation", time: "9:00 – 10:30", topic: "AI in the enterprise — beyond the hype" },
      { img: s6, name: "Rita Schimita", role: "Brand Director", time: "11:00 – 12:15", topic: "Storytelling for billion-dollar brands" },
      { img: s4, name: "Robert Falken", role: "Venture Partner", time: "14:00 – 15:30", topic: "Reading the next market cycle" },
      { img: s5, name: "Deixe Armostrong", role: "Product Lead", time: "16:00 – 17:30", topic: "Closing fireside · What we learned" },
    ],
  },
  {
    date: "18 Oct 2026",
    slots: [
      { img: s1, name: "Fatima Haussein", role: "Executive Mentor", time: "10:00 – 12:00", topic: "Workshop · Operating cadence for leaders" },
      { img: s2, name: "Dyane More", role: "Growth Strategist", time: "13:00 – 15:00", topic: "Workshop · Pricing experiments that work" },
    ],
  },
];

const Schedule = () => {
  const [active, setActive] = useState(0);
  const day = days[active];

  return (
    <section id="schedule" className="relative py-24 md:py-32 bg-background">
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="section-heading center text-3xl md:text-5xl text-foreground">
            Programme Schedule
          </h2>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0">
            {days.map((d, i) => (
              <button
                key={d.date}
                onClick={() => setActive(i)}
                className={`shrink-0 lg:w-full px-6 py-5 font-display font-bold uppercase tracking-wider text-sm transition-smooth ${
                  i === active
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {d.date}
              </button>
            ))}
          </div>

          {/* Slots */}
          <div className="border border-border p-6 md:p-10 bg-card shadow-soft">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 gap-x-8 gap-y-10"
              >
                {day.slots.map((s, i) => (
                  <motion.div
                    key={s.name + i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex gap-5 items-start"
                  >
                    <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary p-1">
                      <img
                        src={s.img}
                        alt={s.name}
                        loading="lazy"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {s.name}
                      </h3>
                      <p className="text-primary text-xs uppercase tracking-wider italic mt-0.5">
                        {s.role}
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{s.time}</span>
                      </div>
                      <div className="flex items-start gap-2 mt-1.5 text-muted-foreground text-sm">
                        <Mic className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{s.topic}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
