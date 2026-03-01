import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
              Leading Digital Marketing Company in Jaipur
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-body"
            >
              OnActive is a results-driven 360° digital marketing agency based in Jaipur, helping businesses unlock their true growth potential since 2019. We combine data-driven strategies with creative excellence to deliver measurable ROI across every channel. From local startups to PAN India brands, our team crafts customized marketing solutions — including SEO, performance marketing, social media management, web development, and branding — tailored to each client's unique goals. We don't just run campaigns; we build sustainable growth engines that convert clicks into loyal customers.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
