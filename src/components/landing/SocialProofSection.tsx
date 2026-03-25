import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Dr. Amina Okafor", role: "General Practitioner", quote: "NexCare gives me visibility into my patients' health between visits. It's changed how I practise medicine." },
  { name: "James Adeyemi", role: "Patient, Lagos", quote: "I got an alert about my blood pressure before I even felt symptoms. NexCare literally saved my life." },
  { name: "HealthPlus HMO", role: "Insurance Partner", quote: "Integrating with NexCare reduced our emergency claims by 30% in the pilot programme." },
];

const partnerLogos = ["MedTrust HMO", "CareFirst", "PharmaDirect", "City General Hospital", "WellBeing Insurance"];

const SocialProofSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            Trusted by <span className="gradient-text">Healthcare Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border border-border/50 p-8 space-y-5 hover:shadow-premium transition-all duration-300">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{t.quote}"</p>
              <div className="pt-2 border-t border-border/50">
                <div className="font-bold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="text-center space-y-8">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-[0.2em]">Partners & Integrations</p>
          <div className="flex flex-wrap justify-center gap-4">
            {partnerLogos.map((name) => (
              <div key={name} className="px-6 py-3 bg-card rounded-xl text-sm font-medium text-muted-foreground border border-border/50 hover:border-primary/15 transition-colors">
                {name}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">Pilot partnerships • Expanding Q2 2026</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
