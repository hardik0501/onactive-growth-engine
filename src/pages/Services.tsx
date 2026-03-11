import { motion } from "framer-motion";
import { Phone, BarChart3, Code2, Users, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Phone,
    title: "EPBX in Healthcare",
    tagline: "Seamless Communication for Healthcare",
    description: "Providing advanced EPBX and cloud telephony solutions specifically designed for the healthcare sector. Our systems enhance patient communication, streamline appointment scheduling, and ensure seamless connectivity for hospitals, clinics, and diagnostic centers.",
    features: ["Cloud-based EPBX systems", "Patient call routing", "Appointment scheduling integration", "Multi-location connectivity", "Call analytics & reporting"],
  },
  {
    icon: BarChart3,
    title: "TeleCRM",
    tagline: "Smart Lead Management & Sales Automation",
    description: "We enable businesses to manage leads effectively, automate calling processes, and gain valuable insights through comprehensive analytics and reporting, ultimately driving sales productivity.",
    features: ["Lead management automation", "Auto-dialer integration", "Real-time analytics dashboard", "Call recording & tracking", "Sales pipeline management"],
  },
  {
    icon: Code2,
    title: "HRMS Development",
    tagline: "End-to-End Human Resource Management",
    description: "Our expert team develops HRMS solutions — from recruitment and onboarding to payroll management and performance tracking. Our HRMS solutions are designed to improve efficiency and employee engagement.",
    features: ["Recruitment & onboarding modules", "Payroll & attendance management", "Performance tracking", "Employee self-service portal", "Custom workflow automation"],
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
    tagline: "Amplify Your Online Presence",
    description: "Amplify your online presence and generate qualified leads with our data-driven digital marketing strategies. We offer a full spectrum of services including SEO, SMM, PPC, and content marketing to help you achieve your business objectives.",
    features: ["Search Engine Optimization (SEO)", "Social Media Marketing (SMM)", "Pay-Per-Click (PPC) advertising", "Content marketing strategy", "Analytics & performance reporting"],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24 relative overflow-hidden">
        <motion.div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="section-container relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-primary-foreground/75 text-lg max-w-2xl mx-auto"
          >
            Integrated business solutions designed to streamline processes, enhance communication, and drive measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="section-container space-y-24">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}
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
                  <h2 className="heading-section mt-2 mb-4">{service.title}</h2>
                  <p className="text-body mb-6">{service.description}</p>
                  <Link to="/contact" className="btn-primary text-sm">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Features Card */}
                <div className={!isEven ? "md:[direction:ltr]" : ""}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how our integrated services can transform your business operations.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-4 animate-glow-pulse">
              Schedule Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
