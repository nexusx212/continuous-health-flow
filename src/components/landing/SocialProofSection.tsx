import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Amina Okafor",
    role: "General Practitioner",
    quote: "NexCare gives me visibility into my patients' health between visits. It's changed how I practise medicine.",
  },
  {
    name: "James Adeyemi",
    role: "Patient, Lagos",
    quote: "I got an alert about my blood pressure before I even felt symptoms. NexCare literally saved my life.",
  },
  {
    name: "HealthPlus HMO",
    role: "Insurance Partner",
    quote: "Integrating with NexCare reduced our emergency claims by 30% in the pilot programme.",
  },
];

const partnerLogos = ["MedTrust HMO", "CareFirst", "PharmaDirect", "City General Hospital", "WellBeing Insurance"];

const SocialProofSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Trusted by <span className="gradient-text">Healthcare Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border border-border p-6 space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="text-center space-y-6">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Partners & Integrations</p>
          <div className="flex flex-wrap justify-center gap-8">
            {partnerLogos.map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-muted/50 rounded-lg text-sm font-medium text-muted-foreground border border-border"
              >
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
