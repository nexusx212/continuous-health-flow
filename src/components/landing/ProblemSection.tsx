import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, EyeOff, Siren, ShieldAlert } from "lucide-react";

const problems = [
  { icon: Clock, title: "Reactive Care Only", desc: "Patients only receive care during scheduled visits — missing critical windows." },
  { icon: EyeOff, title: "Zero Visibility", desc: "Doctors lose sight of patients after consultations with no continuous data." },
  { icon: Siren, title: "Late Emergencies", desc: "By the time help arrives, conditions have often escalated beyond control." },
  { icon: ShieldAlert, title: "Drug & Delay Risks", desc: "Counterfeit medications and logistical delays worsen patient outcomes daily." },
];

const ProblemSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div ref={ref} className="section-fade-in relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="space-y-5 max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">The Problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            Healthcare is Reactive —{" "}
            <span className="gradient-text">And That Costs Lives</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            The current system is built on waiting. We believe healthcare should never pause.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl border border-border/50 p-7 text-left space-y-4 hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-destructive/8 flex items-center justify-center">
                <p.icon size={22} className="text-destructive/80" />
              </div>
              <h3 className="font-bold text-foreground tracking-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
