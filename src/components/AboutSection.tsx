import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section mb-6">
              Leading Digital Marketing Company in Jaipur
            </h2>
            <p className="text-body">
              OnActive is a results-driven 360° digital marketing agency based in Jaipur, helping businesses unlock their true growth potential since 2019. We combine data-driven strategies with creative excellence to deliver measurable ROI across every channel. From local startups to PAN India brands, our team crafts customized marketing solutions — including SEO, performance marketing, social media management, web development, and branding — tailored to each client's unique goals. We don't just run campaigns; we build sustainable growth engines that convert clicks into loyal customers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
