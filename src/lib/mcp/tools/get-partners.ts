import { defineTool } from "@lovable.dev/mcp-js";

const partners = [
  { audience: "Freelance Doctors", pitch: "Earn flexibly by joining the NexCare network. Set your hours, receive AI-matched referrals, and consult remotely." },
  { audience: "Insurance & HMOs", pitch: "Reduce emergency claims with continuous monitoring. Access population-level analytics and preventive care tools." },
  { audience: "Pharmacies", pitch: "Receive verified e-prescriptions directly. Manage inventory and fulfil deliveries through the NexCare marketplace." },
];

export default defineTool({
  name: "get_partners",
  title: "Get NexCare partner offerings",
  description: "Return the value proposition for each NexCare partner type (doctors, insurers/HMOs, pharmacies).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(partners, null, 2) }],
    structuredContent: { partners },
  }),
});