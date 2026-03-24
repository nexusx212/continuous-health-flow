import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, EyeOff, Siren, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Reactive Care Only",
    desc: "Patients only receive care during scheduled visits — missing critical windows.",
  },
  {
    icon: EyeOff,
    title: "Zero Visibility",
    desc: "Doctors lose sight of patients after consultations with no continuous data.",
  },
  {
    icon: Siren,
    title: "Late Emergencies",
    desc: "By the time help arrives, conditions have often escalated beyond control.",
  },
  {
    icon: ShieldAlert,
    title: "Drug & Delay Risks",
    desc: "Counterfeit medications and logistical delays worsen patient outcomes daily.",
  },
];

const ProblemSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Healthcare is Reactive —{" "}
            <span className="gradient-text">And That Costs Lives</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The current system is built on waiting. We believe healthcare should never pause.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl border border-border p-6 text-left space-y-3 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <p.icon size={22} className="text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
