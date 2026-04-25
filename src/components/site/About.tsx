import { motion } from "framer-motion";
import { Clock, GraduationCap, Mail, MapPin, Mic, Phone } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";

const info = [
  {
    icon: Clock,
    title: "Date & Time",
    lines: ["11:30 AM - 5:30 PM", "October 15 - 18, 2026"],
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
  {
    img: service1,
    title: "Our Event Goal",
    text: "Empower founders, executives, and creators with frameworks they can ship the very next morning.",
  },
  {
    img: service2,
    title: "25 Top Speakers",
    text: "Hand-picked operators from Fortune 500s and breakout startups, sharing what actually moved the needle.",
  },
  {
    img: service3,
    title: "Media Coverage",
    text: "Live coverage by major industry press, with on-site photographers and broadcast crews.",
  },
  {
    img: service4,
    title: "Attendee Network",
    text: "Over 2,400 verified attendees from 38 countries - your next co-founder, hire, or customer is here.",
  },
];

const organizerDetails = [
  {
    icon: Phone,
    label: "Mobile",
    value: "9985372152",
    href: "tel:+919985372152",
  },
  {
    icon: GraduationCap,
    label: "Teaching Experience",
    value: "15 Years",
  },
  {
    icon: Mail,
    label: "Email",
    value: "drkondurukranthikumar@gmail.com",
    href: "mailto:drkondurukranthikumar@gmail.com",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-soft py-24 md:py-32"
    >
      <div className="container relative">
        <div className="grid gap-8 border-b border-border pb-20 md:grid-cols-3 md:gap-12 md:pb-28">
          {info.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-start gap-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
                <item.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-2 font-display font-bold uppercase tracking-wide text-foreground">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <p
                    key={line}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative pb-14 pt-20 text-center md:pb-16 md:pt-28">
          <span className="ghost-text">About</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-4xl text-balance font-display text-3xl font-extrabold leading-tight text-foreground md:text-5xl"
          >
            Meet the editor and conference organizer guiding the event's{" "}
            <span className="text-primary">academic vision</span> and coordination.
          </motion.h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid items-start gap-10 border border-border/60 bg-card p-8 shadow-card md:mb-16 md:p-10 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Editor and Conference Organizer
            </p>
            <h3 className="mb-4 font-display text-3xl font-extrabold text-foreground md:text-4xl">
              Dr. Konduru Kranthi Kumar
            </h3>
            <div className="space-y-2 leading-relaxed text-muted-foreground">
              <p>Professor, Dept. of Information Technology</p>
              <p>Vasireddy Venkatadri International Technological University</p>
              <p>Nambur</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {organizerDetails.map((detail) => (
              <div
                key={detail.label}
                className="border border-border bg-background/70 p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <detail.icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                    {detail.label}
                  </p>
                </div>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="break-all text-sm text-muted-foreground transition-smooth hover:text-primary"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{detail.value}</p>
                )}
              </div>
            ))}
          </div>
        </motion.article>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card shadow-card transition-smooth hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center md:p-7">
                <h3 className="mb-3 font-display text-xl font-bold text-foreground transition-smooth group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
