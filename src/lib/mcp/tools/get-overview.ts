import { defineTool } from "@lovable.dev/mcp-js";

const overview = {
  name: "NexCare",
  tagline: "Real-Time Monitoring. Real-Life Rescue.",
  description: "NexCare is a continuous healthcare platform powered by AI, doctors, and real-time patient data. Wearables and connected apps monitor vitals 24/7, AI flags early warning signs, doctors and nutritionists engage proactively, medications are delivered via partner pharmacies, and emergency services are triggered when seconds matter.",
  poweredBy: "Nexus X Industries",
  website: "https://continuous-health-flow.lovable.app",
};

export default defineTool({
  name: "get_overview",
  title: "Get NexCare overview",
  description: "Return a short overview of NexCare: name, tagline, description, and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(overview, null, 2) }],
    structuredContent: overview,
  }),
});