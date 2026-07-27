import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const services = [
  { name: "Telehealth", description: "On-demand video and chat consultations with licensed physicians, specialists, and mental health professionals — from anywhere.", features: ["24/7 availability", "Specialist referrals", "Prescription delivery"] },
  { name: "Nutrition Planning", description: "Personalized meal plans and dietary guidance from certified nutritionists, tailored to your health goals and conditions.", features: ["Custom meal plans", "Allergy-aware", "Progress tracking"] },
  { name: "Diagnostics", description: "At-home lab kits and integrated diagnostic tools that deliver accurate results directly to your care team.", features: ["Home sample collection", "Fast turnaround", "Doctor-reviewed results"] },
  { name: "Wellness Programs", description: "Holistic wellness plans combining fitness, mindfulness, and preventive care — designed for long-term health outcomes.", features: ["Fitness coaching", "Stress management", "Sleep optimization"] },
  { name: "Chronic Care Management", description: "Continuous monitoring and proactive management for diabetes, hypertension, asthma, and other chronic conditions.", features: ["Daily vitals tracking", "Medication reminders", "Care team alerts"] },
  { name: "Mental Health", description: "Confidential therapy sessions, cognitive behavioral tools, and AI-driven mood tracking for emotional well-being.", features: ["Licensed therapists", "CBT tools", "Mood analytics"] },
];

export default defineTool({
  name: "get_services",
  title: "Get NexCare services",
  description: "List NexCare's care services with their descriptions and key features.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});