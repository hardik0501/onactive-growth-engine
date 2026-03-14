import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, ShieldCheck, Heart } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Lightbulb, title: "Integrated Solutions", desc: "A comprehensive suite of services that work together seamlessly, eliminating the need for multiple vendors." },
  { icon: ShieldCheck, title: "Industry Expertise", desc: "Deep domain knowledge across healthcare, sales, HR, and digital marketing to deliver sector-specific results." },
  { icon: Heart, title: "Client-Centric Approach", desc: "Every solution is tailored to your unique business needs, ensuring measurable outcomes and lasting partnerships." },
];

const milestones = [
  { year: "2019", text: "Founded in Jaipur with a vision to simplify business operations" },
  { year: "2020", text: "Launched EPBX & cloud telephony for healthcare sector" },
  { year: "2021", text: "Expanded into TeleCRM and recruitment consulting" },
  { year: "2022", text: "Developed custom HRMS products for mid-market enterprises" },
  { year: "2023", text: "Full-spectrum digital marketing division launched" },
  { year: "2024", text: "Serving 100+ clients across India and beyond" },
];

const About = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
        <motion.div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
          >
            About <span className="text-accent">OnActive</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-primary-foreground/75 text-base md:text-lg max-w-2xl mx-auto"
          >
            Empowering businesses to achieve operational excellence since 2019.
          </motion.p>
        </div>
      </section>

      {/* Story with Image */}
      <section ref={ref} className="section-padding bg-background relative overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <motion.div style={{ y: imgY }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
                className="relative"
              >
                <img
                  src={aboutTeam}
                  alt="OnActive team working together"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[16/10]"
                  loading="lazy"
                />
                <div className="absolute -left-3 top-8 w-1.5 h-20 rounded-full bg-accent" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card rounded-xl p-4 shadow-lg border border-border"
                >
                  <p className="text-2xl font-bold text-primary">Since</p>
                  <p className="text-xl font-bold text-accent">2019</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-section mb-6">Our Story</h2>
              <p className="text-body mb-4">
                OnActive was born from a simple belief — that businesses deserve integrated solutions that actually work. Founded in Jaipur in 2019, we started by solving communication challenges for healthcare providers with advanced EPBX systems.
              </p>
              <p className="text-body">
                Today, we've grown into a comprehensive business solutions provider spanning cloud telephony, CRM, HRMS development, talent acquisition, and digital marketing. Our mission remains unchanged: streamline processes, enhance communication, and drive measurable growth for every client we partner with.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-section text-center mb-14"
          >
            Why Choose OnActive?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, rotateX: 2 }}
                className="card-service text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center mx-auto mb-5"
                >
                  <v.icon className="w-7 h-7 text-accent" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-section text-center mb-14"
          >
            Our Journey
          </motion.h2>
          <div className="max-w-2xl mx-auto space-y-0 relative">
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                className={`relative flex items-start gap-4 py-6 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right md:ml-0" : "md:pl-10 md:ml-auto"}`}
              >
                <div className={`absolute w-3 h-3 rounded-full bg-accent border-2 border-background top-8 ${i % 2 === 0 ? "left-[14px] md:left-auto md:-right-[7px]" : "left-[14px] md:-left-[7px]"}`} />
                <div className="pl-8 md:pl-0">
                  <span className="text-accent font-bold text-sm">{m.year}</span>
                  <p className="text-sm text-muted-foreground mt-1">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta section-padding">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how our integrated solutions can drive your growth.
            </p>
            <Link to="/contact" className="btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4 animate-glow-pulse">
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
