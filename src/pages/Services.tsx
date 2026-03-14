import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, BarChart3, Code2, Users, Megaphone, ArrowRight, CheckCircle2, Search, Share2, MousePointerClick, Globe, Palette, Video, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import servicesHero from "@/assets/services-hero.jpg";
import serviceEpbx from "@/assets/service-epbx.jpg";
import serviceTelecrm from "@/assets/service-telecrm.jpg";
import serviceHrms from "@/assets/service-hrms.jpg";

const services = [
  {
    icon: Phone,
    title: "EPBX in Healthcare",
    tagline: "Seamless Communication for Healthcare",
    description: "Providing advanced EPBX and cloud telephony solutions specifically designed for the healthcare sector. Our systems enhance patient communication, streamline appointment scheduling, and ensure seamless connectivity for hospitals, clinics, and diagnostic centers.",
    features: ["Cloud-based EPBX systems", "Patient call routing", "Appointment scheduling integration", "Multi-location connectivity", "Call analytics & reporting"],
    image: serviceEpbx,
  },
  {
    icon: BarChart3,
    title: "TeleCRM",
    tagline: "Smart Lead Management & Sales Automation",
    description: "We enable businesses to manage leads effectively, automate calling processes, and gain valuable insights through comprehensive analytics and reporting, ultimately driving sales productivity.",
    features: ["Lead management automation", "Auto-dialer integration", "Real-time analytics dashboard", "Call recording & tracking", "Sales pipeline management"],
    image: serviceTelecrm,
  },
  {
    icon: Code2,
    title: "HRMS Development",
    tagline: "End-to-End Human Resource Management",
    description: "Our expert team develops HRMS solutions — from recruitment and onboarding to payroll management and performance tracking. Our HRMS solutions are designed to improve efficiency and employee engagement.",
    features: ["Recruitment & onboarding modules", "Payroll & attendance management", "Performance tracking", "Employee self-service portal", "Custom workflow automation"],
    image: serviceHrms,
  },
  {
    icon: Users,
    title: "Recruitment & Consultancy",
    tagline: "Build High-Performing Teams",
    description: "Our dedicated recruitment and consulting services connect you with top-tier professionals across various industries. We offer end-to-end talent acquisition, manpower solutions, and strategic HR consulting to build high-performing teams.",
    features: ["End-to-end talent acquisition", "Industry-specific recruitment", "Manpower solutions", "Strategic HR consulting", "Executive search & placement"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "360° Growth Solutions",
    description: "Amplify your online presence and generate qualified leads with our data-driven digital marketing strategies. We offer a full spectrum of services to help you achieve your business objectives.",
    features: ["Integrated campaign management", "Multi-channel strategy", "Performance tracking & analytics", "Lead generation funnels", "Marketing automation"],
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Dominate Search Rankings",
    description: "Data-driven SEO strategies that boost your organic rankings and drive highly targeted traffic. We cover on-page, off-page, technical SEO, and local SEO to ensure maximum visibility.",
    features: ["On-page & off-page SEO", "Technical SEO audits", "Local SEO & Google My Business", "Keyword research & strategy", "Link building & authority growth"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Engage & Grow Your Audience",
    description: "Strategic social media management across Instagram, Facebook, LinkedIn & YouTube. We build brand awareness, create engaging content, and grow your community with data-backed strategies.",
    features: ["Content calendar & creation", "Community management", "Influencer collaborations", "Social media advertising", "Analytics & growth reporting"],
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click (PPC)",
    tagline: "Maximize Your Ad ROI",
    description: "High-ROI paid advertising campaigns on Google Ads, Meta Ads, and other platforms. We optimize every rupee of ad spend to deliver maximum conversions and qualified leads.",
    features: ["Google Ads management", "Meta & Instagram Ads", "Remarketing campaigns", "A/B testing & optimization", "Conversion tracking & reporting"],
  },
  {
    icon: Globe,
    title: "Website & Funnel Development",
    tagline: "Convert Visitors Into Customers",
    description: "Conversion-optimized websites, landing pages, and sales funnels designed to capture leads and drive business growth. Built with modern tech for speed and performance.",
    features: ["Responsive website design", "Landing page development", "Sales funnel creation", "E-commerce solutions", "Performance optimization"],
  },
  {
    icon: Palette,
    title: "Branding & Creative Strategy",
    tagline: "Make Your Brand Unforgettable",
    description: "Complete brand identity design from logo creation to brand guidelines and packaging. We craft creative assets that communicate your brand's value and leave a lasting impression.",
    features: ["Logo & visual identity", "Brand guidelines", "Packaging design", "Marketing collateral", "Creative campaign design"],
  },
  {
    icon: Video,
    title: "Video Marketing",
    tagline: "Tell Your Story Visually",
    description: "Professional video production including corporate videos, reels, product demos, and YouTube marketing. Engage your audience with compelling visual content that drives action.",
    features: ["Corporate video production", "Social media reels & shorts", "Product demo videos", "YouTube channel management", "Video ad campaigns"],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    tagline: "Build Authority & Trust",
    description: "Strategic content creation that establishes your brand as an industry authority. From blogs and articles to infographics and email campaigns, we nurture leads through valuable content.",
    features: ["Blog & article writing", "Infographic design", "Email marketing campaigns", "Whitepapers & case studies", "Content strategy & planning"],
  },
];

const Services = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroImgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="gradient-hero py-16 md:py-24 relative overflow-hidden">
        <motion.img
          style={{ y: heroImgY, opacity: heroImgOpacity }}
          src={servicesHero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          aria-hidden
        />
        <motion.div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
           >
            Our 360° <span className="text-accent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-primary-foreground/75 text-base md:text-lg max-w-2xl mx-auto"
          >
            Comprehensive business & digital marketing solutions designed to streamline processes, enhance communication, and drive measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="section-container space-y-16 md:space-y-24">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}
              >
                {/* Content */}
                <div className={!isEven ? "md:[direction:ltr]" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center mb-5"
                  >
                    <service.icon className="w-7 h-7 text-accent" />
                  </motion.div>
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">{service.tagline}</span>
                  <h2 className="heading-section mt-2 mb-4 text-xl md:text-2xl lg:text-3xl">{service.title}</h2>
                  <p className="text-body text-sm md:text-base mb-6">{service.description}</p>
                  <Link to="/contact" className="btn-primary text-sm">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Features Card or Image */}
                <div className={!isEven ? "md:[direction:ltr]" : ""}>
                  {service.image ? (
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="space-y-4"
                    >
                      <img
                        src={service.image}
                        alt={`${service.title} visual`}
                        className="rounded-xl shadow-lg w-full aspect-square object-cover"
                        loading="lazy"
                      />
                      <div className="card-service p-4 md:p-6">
                        <h3 className="font-bold text-foreground mb-3 text-base">Key Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((f, fi) => (
                            <motion.li
                              key={f}
                              initial={{ opacity: 0, x: -15 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: fi * 0.08, duration: 0.3 }}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              {f}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ y: -6, rotateX: 2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="card-service"
                    >
                      <h3 className="font-bold text-foreground mb-5 text-lg">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((f, fi) => (
                          <motion.li
                            key={f}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: fi * 0.08, duration: 0.3 }}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            {f}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta section-padding relative overflow-hidden">
        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how our integrated services can transform your business operations.
            </p>
            <Link to="/contact" className="btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4 animate-glow-pulse">
              Schedule Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
