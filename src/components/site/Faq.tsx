import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    q: "Pretium suspendisse quis?",
    a: "All ticket tiers include access to the main hall keynotes. Premium and VIP tiers add workshop access, reserved seating, and post-event recordings — usually within 72 hours of the event closing.",
  },
  {
    q: "Tristique arcu proin parturient?",
    a: "Yes — refunds are available up to 30 days before the event date. After that, you can transfer your ticket to a colleague free of charge by emailing our support team.",
  },
  {
    q: "Maecenas facili ccumsan arcu?",
    a: "We block a discounted room rate at the venue hotel and three nearby partners. The booking link is sent in your confirmation email along with the conference welcome guide.",
  },
  {
    q: "Convallis semper sapien vitae?",
    a: "Absolutely. Group rates kick in at 5 tickets and increase at 10, 25, and 50. Reach out via the contact form for a custom quote and an onboarding manager.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);
  const { toast } = useToast();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Question submitted",
      description: "Thanks — our team will get back to you within 24 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="section-heading center text-3xl md:text-5xl text-foreground">
            Most Common Questions
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                type="text"
                placeholder="Full Name *"
                className="w-full px-5 py-4 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-4 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                type="email"
                placeholder="E-Mail"
                className="w-full px-5 py-4 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
              />
              <input
                type="tel"
                placeholder="Phone (Optional)"
                className="w-full px-5 py-4 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
            <textarea
              required
              rows={6}
              placeholder="Add Your Question"
              className="w-full px-5 py-4 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-smooth resize-none"
            />
            <button
              type="submit"
              className="px-10 py-4 bg-primary text-primary-foreground font-display font-semibold uppercase tracking-wider text-sm hover:bg-primary-deep transition-smooth shadow-elegant"
            >
              Ask Now
            </button>
          </motion.form>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border divide-y divide-border"
          >
            {faqs.map((f, i) => {
              const active = i === open;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(active ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left transition-smooth hover:bg-secondary/40"
                  >
                    <span
                      className={`font-display font-semibold text-base md:text-lg transition-smooth ${
                        active ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}. {f.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-primary transition-smooth ${
                        active ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ${
                      active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
