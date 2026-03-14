import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useRef } from "react";
import caseStudyImg from "@/assets/case-study-results.jpg";

const cases = [
  {
    industry: "Real Estate",
    problem: "Low-quality leads from traditional advertising with high cost per acquisition.",
    strategy: "Performance marketing via Google & Meta Ads with hyper-targeted landing pages.",
    result: "3.5x ROAS and 60% reduction in cost per lead within 3 months.",
  },
  {
    industry: "E-commerce",
    problem: "Stagnant organic traffic and poor conversion rates on the website.",
    strategy: "Full SEO overhaul + UX-optimized product pages + retargeting funnels.",
    result: "180% increase in organic traffic, 2.8x improvement in conversion rate.",
  },
  {
    industry: "Healthcare",
    problem: "Minimal online presence and zero appointment bookings from digital channels.",
    strategy: "Local SEO + Google Ads + Social media content strategy + WhatsApp integration.",
    result: "500+ monthly appointment leads, 4x growth in online visibility.",
  },
];

const CaseStudies = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} id="case-studies" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(40_100%_48%/0.04),transparent_50%)] pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Case Studies</h2>
          <p className="text-body">Real results from real clients.</p>
        </motion.div>

        {/* Visual banner */}
        <motion.div
          style={{ y: imgY }}
          className="mb-12 rounded-2xl overflow-hidden shadow-lg"
        >
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={caseStudyImg}
            alt="Analytics dashboard showing client growth results"
            className="w-full h-48 md:h-64 object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.industry}
              initial={{ opacity: 0, y: 50, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, type: "spring", stiffness: 300 },
              }}
              className="card-service flex flex-col group cursor-default"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <TrendingUp className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-sm font-semibold text-accent">{c.industry}</span>
              </div>
              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Problem</p>
                  <p className="text-sm text-foreground">{c.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Strategy</p>
                  <p className="text-sm text-foreground">{c.strategy}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide">Result</p>
                  <p className="text-sm font-semibold text-foreground">{c.result}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ x: 4 }}
                className="mt-4 text-sm font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                View Detailed Case Study <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
