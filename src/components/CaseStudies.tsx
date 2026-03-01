import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

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
  return (
    <section id="case-studies" className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Case Studies</h2>
          <p className="text-body">Real results from real clients.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-service flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-accent" />
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
              <button className="mt-4 text-sm font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1">
                View Detailed Case Study <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
