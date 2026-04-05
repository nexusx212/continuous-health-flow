import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Dr. Adaeze Nwosu",
    role: "CEO & Co-Founder",
    bio: "Public health physician with 12+ years in health systems design across West Africa.",
    initials: "AN",
  },
  {
    name: "Chinedu Okafor",
    role: "CTO & Co-Founder",
    bio: "Full-stack engineer and former lead at a top healthtech startup, passionate about scalable care infrastructure.",
    initials: "CO",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Chief Medical Officer",
    bio: "Board-certified cardiologist specializing in remote patient monitoring and digital therapeutics.",
    initials: "FA",
  },
  {
    name: "Emeka Ibe",
    role: "Head of Product",
    bio: "Product strategist with experience building consumer health apps used by millions.",
    initials: "EI",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-5 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-foreground tracking-[-0.02em]">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            A passionate team of doctors, engineers, and health innovators building the future of care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group bg-card rounded-2xl border border-border/50 p-8 text-center space-y-4 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full gradient-primary mx-auto flex items-center justify-center shadow-lg shadow-primary/15">
                <span className="text-xl font-bold text-primary-foreground">{member.initials}</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-foreground tracking-tight">{member.name}</h3>
                <p className="text-xs font-medium text-primary">{member.role}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label={`${member.name} LinkedIn`}>
                  <Linkedin size={16} />
                </button>
                <button className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label={`${member.name} Twitter`}>
                  <Twitter size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;