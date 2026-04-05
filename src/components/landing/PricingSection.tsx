import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    desc: "Essential monitoring for individuals getting started with proactive healthcare.",
    features: [
      "Basic vitals tracking",
      "Weekly health reports",
      "Community support",
      "Medication reminders",
      "Health articles & tips",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₦4,999",
    period: "/month",
    desc: "Full-spectrum care with AI triage, telehealth, and priority emergency response.",
    features: [
      "24/7 real-time monitoring",
      "AI-powered triage & alerts",
      "Unlimited video consultations",
      "Priority emergency dispatch",
      "Nutrition & wellness plans",
      "Pharmacy delivery integration",
      "Dedicated care team",
    ],
    cta: "Start 14-Day Trial",
    highlighted: true,
  },
  {
    name: "Family",
    price: "₦9,999",
    period: "/month",
    desc: "Cover your entire household with shared dashboards and family care coordination.",
    features: [
      "Up to 6 family members",
      "All Premium features",
      "Family health dashboard",
      "Pediatric & elderly care",
      "Shared pharmacy account",
      "Family wellness programs",
    ],
    cta: "Start Family Plan",
    highlighted: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-5 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Choose a plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`relative bg-card rounded-2xl border p-8 space-y-6 transition-all duration-300 hover:shadow-premium ${
                plan.highlighted
                  ? "border-primary/40 shadow-lg shadow-primary/10 scale-[1.02] md:scale-105"
                  : "border-border/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  plan.highlighted ? "" : "variant-outline"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground"
        >
          All plans include end-to-end encryption, HIPAA-aligned security, and 24/7 technical support.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;