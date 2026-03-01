import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What makes OnActive the best digital marketing agency in Jaipur?",
    a: "OnActive combines 5+ years of experience, a data-driven approach, and a dedicated team to deliver measurable results. We offer complete 360° services — from SEO and performance marketing to branding and web development — all under one roof with transparent reporting.",
  },
  {
    q: "How much does digital marketing cost in India?",
    a: "Digital marketing costs vary based on your goals, industry, and channels. At OnActive, we offer customized packages starting from ₹15,000/month. We always recommend a free strategy call to understand your needs before quoting.",
  },
  {
    q: "Do you offer performance-based marketing?",
    a: "Yes! We specialize in performance marketing with a strong focus on ROI. Our campaigns are optimized for conversions, leads, and revenue — not just vanity metrics.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Typically, you'll start seeing meaningful improvements in 3-6 months, with significant results by 6-12 months depending on your industry and competition level.",
  },
  {
    q: "Do you provide complete 360° digital marketing services?",
    a: "Absolutely. OnActive offers end-to-end solutions including performance marketing, SEO, social media management, web development, branding, and video marketing — a complete growth ecosystem for your business.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
