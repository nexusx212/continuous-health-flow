import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Watch, Brain, UserRound, Pill, Ambulance } from "lucide-react";

const steps = [
  { icon: Watch, label: "Monitor", desc: "Wearable + app track vitals continuously", num: "01" },
  { icon: Brain, label: "Detect", desc: "AI analyses data for early warning signs", num: "02" },
  { icon: UserRound, label: "Consult", desc: "Doctors & nutritionists engage proactively", num: "03" },
  { icon: Pill, label: "Treat", desc: "Pharmacy delivery & medication tracking", num: "04" },
  { icon: Ambulance, label: "Rescue", desc: "Emergency integration when seconds matter", num: "05" },
];

const SolutionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="space-y-5 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            One Platform.{" "}
            <span className="gradient-text">Total Continuous Care</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            A seamless loop that keeps patients safe — from monitoring to rescue.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <div key={s.label} className="group relative bg-card border border-border/50 rounded-2xl p-6 text-center space-y-4 hover:shadow-premium hover:-translate-y-1 transition-all duration-300">
              <div className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">{s.num}</div>
              <div className="w-14 h-14 rounded-2xl gradient-primary mx-auto flex items-center justify-center shadow-lg shadow-primary/15">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground tracking-tight">{s.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
