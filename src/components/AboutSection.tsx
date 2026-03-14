import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  return (
    <section ref={ref} id="about" className="section-padding bg-background relative overflow-hidden">
      <motion.div style={{ y }} className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }} className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
              className="relative"
            >
              <img
                src={aboutTeam}
                alt="OnActive team collaborating on business solutions"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[16/10]"
                loading="lazy"
              />
              {/* Floating stats badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card rounded-xl p-4 shadow-lg border border-border"
              >
                <p className="text-2xl md:text-3xl font-bold text-primary">100+</p>
                <p className="text-xs text-muted-foreground">Clients Served</p>
              </motion.div>
              {/* Decorative accent bar */}
              <div className="absolute -left-3 top-6 w-1.5 h-16 rounded-full bg-accent" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-accent font-semibold text-sm uppercase tracking-wider"
            >
              Since 2019
            </motion.span>
            <h2 className="heading-section mb-6 mt-2">
              Leading Business Solutions Provider in India
            </h2>
            <p className="text-body mb-6">
              At OnActive, we are dedicated to empowering businesses to achieve operational excellence. As a leading business solutions provider, we offer a comprehensive suite of services designed to streamline processes, enhance communication, and drive growth.
            </p>
            <p className="text-body mb-8">
              Our expertise spans critical business functions — from EPBX & cloud telephony for healthcare to TeleCRM, HRMS development, recruitment consulting, and full-spectrum digital marketing.
            </p>
            <Link to="/about" className="btn-outline text-sm">
              Learn More About Us →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
