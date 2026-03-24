import { useState } from "react";
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
    <section id="how-it-works" className="py-20 lg:py-28">
      <div ref={ref} className="section-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            How <span className="gradient-text">NexCare</span> Works
          </h2>
          <p className="text-muted-foreground text-lg">Simple steps tailored to every stakeholder.</p>
        </div>

        <Tabs defaultValue="patients" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full">
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value} className="mt-8 space-y-4">
              {t.steps.map((s) => (
                <div key={s.step} className="flex gap-4 items-start bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">{s.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{s.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
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
