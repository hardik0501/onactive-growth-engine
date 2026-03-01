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

const ServicesGrid = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Our Digital Marketing Services</h2>
          <p className="text-body max-w-2xl mx-auto">Comprehensive 360° solutions to grow your business across every digital touchpoint.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-service group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
