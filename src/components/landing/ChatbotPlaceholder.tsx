import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import nexcareIcon from "@/assets/nexcare-icon.png";

const ChatbotPlaceholder = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-card rounded-2xl shadow-premium-lg border border-border/50 w-80 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={nexcareIcon} alt="" className="w-5 h-5" />
              <h4 className="font-bold text-foreground text-sm">NexCare AI</h4>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            👋 Hi! I'm NexCare's AI assistant. I can help you understand our platform, find a doctor, or check your eligibility.
          </p>
          <div className="bg-muted/50 rounded-xl p-4 text-xs text-muted-foreground italic">
            AI assistant coming soon...
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full gradient-primary shadow-lg shadow-primary/25 flex items-center justify-center hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
      >
        <MessageCircle size={22} className="text-primary-foreground" />
      </button>
    </div>
  );
};

export default ChatbotPlaceholder;
