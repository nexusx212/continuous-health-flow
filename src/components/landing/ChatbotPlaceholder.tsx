import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatbotPlaceholder = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-card rounded-2xl shadow-2xl border border-border w-72 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-foreground text-sm">NexCare AI</h4>
            <button onClick={() => setOpen(false)}>
              <X size={16} className="text-muted-foreground" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            👋 Hi! I'm NexCare's AI assistant. I can help you understand our platform, find a doctor, or check your eligibility.
          </p>
          <div className="bg-muted rounded-lg p-3 text-xs text-muted-foreground italic">
            AI assistant coming soon...
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full gradient-primary shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <MessageCircle size={22} className="text-primary-foreground" />
      </button>
    </div>
  );
};

export default ChatbotPlaceholder;
