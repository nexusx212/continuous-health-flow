import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Stethoscope, Building2, Store } from "lucide-react";

const cards = [
  {
    icon: Stethoscope,
    title: "Freelance Doctors",
    desc: "Earn flexibly by joining the NexCare network. Set your hours, receive AI-matched referrals, and consult remotely.",
  },
  {
    icon: Building2,
    title: "Insurance & HMOs",
    desc: "Reduce emergency claims with continuous monitoring. Access population-level analytics and preventive care tools.",
  },
  {
    icon: Store,
    title: "Pharmacies",
    desc: "Receive verified e-prescriptions directly. Manage inventory and fulfil deliveries through the NexCare marketplace.",
  },
];

const PartnersSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="partners" className="py-20 lg:py-28 bg-muted/30">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Built for Patients, Doctors, and{" "}
            <span className="gradient-text">Healthcare Systems</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A multi-sided platform with value for every stakeholder.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-card rounded-2xl border border-border p-8 space-y-4 hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 rounded-2xl gradient-primary mx-auto flex items-center justify-center">
                <c.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
