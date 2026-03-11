import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="about" className="section-padding bg-background relative overflow-hidden">
      <motion.div style={{ y }} className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }} className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="heading-section mb-6"
            >
              Leading Business Solutions Provider in India
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-body mb-8"
            >
              At OnActive, we are dedicated to empowering businesses to achieve operational excellence. As a leading business solutions provider, we offer a comprehensive suite of services designed to streamline processes, enhance communication, and drive growth. Our expertise spans critical business functions — from EPBX & cloud telephony for healthcare to TeleCRM, HRMS development, recruitment consulting, and full-spectrum digital marketing — ensuring that our clients in India and beyond receive tailored solutions that deliver measurable results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/about" className="btn-outline text-sm">
                Learn More About Us →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
