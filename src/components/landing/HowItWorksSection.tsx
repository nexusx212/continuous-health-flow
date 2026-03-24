import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    value: "patients",
    label: "For Patients",
    steps: [
      { step: "01", title: "Connect Your Wearable", desc: "Sync your smartwatch or health device to the NexCare app." },
      { step: "02", title: "Monitor in Real-Time", desc: "Your vitals are tracked 24/7 with AI-powered analysis." },
      { step: "03", title: "Get Proactive Care", desc: "Receive alerts, consult doctors, and get prescriptions delivered." },
      { step: "04", title: "Stay Protected", desc: "Emergency services are alerted automatically if needed." },
    ],
  },
  {
    value: "doctors",
    label: "For Doctors",
    steps: [
      { step: "01", title: "Join the Network", desc: "Register as a freelance or affiliated doctor on NexCare." },
      { step: "02", title: "Receive Referrals", desc: "AI matches patients to your specialty and availability." },
      { step: "03", title: "Consult Remotely", desc: "Video calls, chat, and real-time vitals at your fingertips." },
      { step: "04", title: "Earn Flexibly", desc: "Get paid per consultation with transparent billing." },
    ],
  },
  {
    value: "partners",
    label: "For Partners",
    steps: [
      { step: "01", title: "Integrate Seamlessly", desc: "Connect your HMO, hospital, or pharmacy via API." },
      { step: "02", title: "Access Analytics", desc: "Population health dashboards and claims insights." },
      { step: "03", title: "Reduce Claims", desc: "Preventive care lowers emergency costs significantly." },
    ],
  },
];

const HowItWorksSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="text-center space-y-5 max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            How <span className="gradient-text">NexCare</span> Works
          </h2>
          <p className="text-muted-foreground text-lg font-light">Simple steps tailored to every stakeholder.</p>
        </div>

        <Tabs defaultValue="patients" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full rounded-full p-1 bg-muted/50">
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value} className="rounded-full text-[13px] font-medium data-[state=active]:shadow-sm">
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value} className="mt-10 space-y-4">
              {t.steps.map((s) => (
                <div key={s.step} className="flex gap-5 items-start bg-card rounded-2xl border border-border/50 p-6 hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/15">
                    <span className="text-primary-foreground text-sm font-bold">{s.step}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground tracking-tight">{s.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorksSection;
