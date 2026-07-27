import { defineTool } from "@lovable.dev/mcp-js";

const steps = [
  { step: 1, label: "Monitor", description: "Wearable + app track vitals continuously" },
  { step: 2, label: "Detect", description: "AI analyses data for early warning signs" },
  { step: 3, label: "Consult", description: "Doctors & nutritionists engage proactively" },
  { step: 4, label: "Treat", description: "Pharmacy delivery & medication tracking" },
  { step: 5, label: "Rescue", description: "Emergency integration when seconds matter" },
];

export default defineTool({
  name: "get_solution_flow",
  title: "Get NexCare care pipeline",
  description: "Return NexCare's 5-step continuous-care pipeline: Monitor, Detect, Consult, Treat, Rescue.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(steps, null, 2) }],
    structuredContent: { steps },
  }),
});