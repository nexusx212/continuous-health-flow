import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Watch, Brain, UserRound, Pill, Ambulance, ArrowRight } from "lucide-react";

const steps = [
  { icon: Watch, label: "Monitor", desc: "Wearable + app track vitals continuously" },
  { icon: Brain, label: "Detect", desc: "AI analyses data for early warning signs" },
  { icon: UserRound, label: "Consult", desc: "Doctors & nutritionists engage proactively" },
  { icon: Pill, label: "Treat", desc: "Pharmacy delivery & medication tracking" },
  { icon: Ambulance, label: "Rescue", desc: "Emergency integration when seconds matter" },
];

const SolutionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            One Platform.{" "}
            <span className="gradient-text">Total Continuous Care</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A seamless loop that keeps patients safe — from monitoring to rescue.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2 lg:gap-2">
              <div className="bg-card border border-border rounded-2xl p-6 w-48 text-center space-y-3 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl gradient-primary mx-auto flex items-center justify-center">
                  <s.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{s.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={20} className="text-primary hidden lg:block flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
