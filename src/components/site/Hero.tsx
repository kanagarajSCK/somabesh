import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-conference.jpg";

const target = new Date(Date.now() + 1000 * 60 * 60 * 24 * 92).getTime();

type Time = { days: number; hours: number; minutes: number; seconds: number };

const calc = (): Time => {
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Hero = () => {
  const [t, setT] = useState<Time>(calc);

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Business conference audience"
          className="w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-surface-deeper/85 via-primary-deep/70 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-deeper via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-32 md:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-2xl md:text-4xl text-primary-foreground/90 mb-4"
          >
            Welcome to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-display font-extrabold text-primary-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 text-balance"
          >
            Business Conference <span className="bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-transparent">2026</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Three days. Twenty-five visionary speakers. One unforgettable gathering of leaders shaping the future of business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary font-display font-semibold uppercase tracking-wider text-sm hover:bg-primary-glow hover:text-primary-foreground transition-smooth shadow-elegant"
            >
              Buy Your Ticket
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-display font-semibold uppercase tracking-wider text-sm hover:bg-primary-foreground/10 transition-smooth"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-4 bg-primary shadow-elegant">
            {items.map(([label, val], i) => (
              <div
                key={label}
                className={`relative py-8 md:py-10 text-center ${
                  i < items.length - 1 ? "border-r border-primary-foreground/20" : ""
                }`}
              >
                <div className="font-display font-extrabold text-primary-foreground text-4xl sm:text-6xl md:text-7xl leading-none tabular-nums">
                  {String(val).padStart(2, "0")}
                </div>
                <div className="mt-2 text-primary-foreground/80 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
