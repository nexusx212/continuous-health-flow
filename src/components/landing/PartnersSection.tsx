import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Stethoscope, Building2, Store } from "lucide-react";

const cards = [
  { icon: Stethoscope, title: "Freelance Doctors", desc: "Earn flexibly by joining the NexCare network. Set your hours, receive AI-matched referrals, and consult remotely." },
  { icon: Building2, title: "Insurance & HMOs", desc: "Reduce emergency claims with continuous monitoring. Access population-level analytics and preventive care tools." },
  { icon: Store, title: "Pharmacies", desc: "Receive verified e-prescriptions directly. Manage inventory and fulfil deliveries through the NexCare marketplace." },
];

const PartnersSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="partners" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div ref={ref} className="section-fade-in relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Ecosystem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            Built for Patients, Doctors, and{" "}
            <span className="gradient-text">Healthcare Systems</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            A multi-sided platform with value for every stakeholder.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-card rounded-2xl border border-border/50 p-10 space-y-5 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto flex items-center justify-center shadow-lg shadow-primary/15">
                <c.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground tracking-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
