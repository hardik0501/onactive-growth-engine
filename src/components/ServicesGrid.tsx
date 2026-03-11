import { motion } from "framer-motion";
import { Phone, BarChart3, Code2, Users, Megaphone, Search, Share2, MousePointerClick, Globe, Palette, Video, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Phone,
    title: "EPBX in Healthcare",
    desc: "Advanced EPBX & cloud telephony for hospitals, clinics, and diagnostic centers — enhancing patient communication and appointment scheduling.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: BarChart3,
    title: "TeleCRM",
    desc: "Manage leads effectively, automate calling processes, and gain valuable insights through comprehensive analytics to drive sales productivity.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Code2,
    title: "HRMS Development",
    desc: "Custom HRMS solutions — from recruitment and onboarding to payroll management and performance tracking for improved efficiency.",
    color: "from-primary/20 to-accent/10",
  },
  {
    icon: Users,
    title: "Recruitment & Consultancy",
    desc: "End-to-end talent acquisition, manpower solutions, and strategic HR consulting to build high-performing teams across industries.",
    color: "from-accent/15 to-primary/10",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Full-spectrum SEO, SMM, PPC, and content marketing strategies to amplify your online presence and generate qualified leads.",
    color: "from-primary/15 to-accent/15",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Data-driven SEO strategies including on-page, off-page, technical SEO, and local SEO to boost organic rankings and drive targeted traffic.",
    color: "from-primary/20 to-accent/5",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Strategic social media management across Instagram, Facebook, LinkedIn & YouTube to build brand awareness and engage your audience.",
    color: "from-accent/20 to-primary/5",
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click (PPC)",
    desc: "High-ROI Google Ads, Meta Ads, and remarketing campaigns that convert clicks into customers with optimized ad spend.",
    color: "from-primary/15 to-accent/10",
  },
  {
    icon: Globe,
    title: "Website & Funnel Development",
    desc: "Conversion-optimized websites, landing pages, and sales funnels built to capture leads and drive business growth.",
    color: "from-accent/15 to-primary/15",
  },
  {
    icon: Palette,
    title: "Branding & Creative Strategy",
    desc: "Complete brand identity design — logos, brand guidelines, packaging, and creative assets that make your brand unforgettable.",
    color: "from-primary/20 to-accent/15",
  },
  {
    icon: Video,
    title: "Video Marketing",
    desc: "Professional video production, reels, corporate videos, and YouTube marketing to engage audiences with compelling visual content.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Strategic content creation — blogs, articles, infographics, and email campaigns that establish authority and nurture leads.",
    color: "from-primary/15 to-primary/5",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.04),transparent_50%)] pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="heading-section mb-4">Our 360° Services</h2>
          <p className="text-body max-w-2xl mx-auto">Comprehensive business & digital marketing solutions designed to streamline processes, enhance communication, and drive measurable growth.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{
                y: -12,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
              className="card-service group cursor-default relative"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center mb-5 relative"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <s.icon className="w-7 h-7 text-accent transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-accent/20"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                <motion.div
                  className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  Learn More →
                </motion.div>
              </div>

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 0 1px hsl(var(--accent) / 0.3), 0 0 30px -10px hsl(var(--accent) / 0.15)" }} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-outline">
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
