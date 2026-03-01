import { motion } from "framer-motion";
import { BarChart3, Share2, Search, Globe, Palette, Video } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Performance Marketing", desc: "Data-driven paid campaigns across Google, Meta & more to maximize ROAS and lead generation." },
  { icon: Share2, title: "Social Media Management", desc: "Strategic content planning, community management, and growth across all major platforms." },
  { icon: Search, title: "Search Engine Optimization", desc: "Technical & on-page SEO to boost organic rankings, traffic, and domain authority." },
  { icon: Globe, title: "Website & Funnel Development", desc: "High-converting websites and sales funnels designed for speed, UX, and conversions." },
  { icon: Palette, title: "Branding & Creative Strategy", desc: "Complete brand identity, visual design, and messaging that resonates with your audience." },
  { icon: Video, title: "Video Marketing", desc: "Engaging video content from concept to distribution across YouTube, reels, and ads." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 },
  }),
};

const ServicesGrid = () => {
  return (
    <section id="services" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(40_100%_48%/0.04),transparent_50%)] pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Our Digital Marketing Services</h2>
          <p className="text-body max-w-2xl mx-auto">Comprehensive 360° solutions to grow your business across every digital touchpoint.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
              className="card-service group cursor-default"
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 relative"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <s.icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-lg bg-accent/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-4 h-0.5 w-0 bg-accent rounded-full transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
