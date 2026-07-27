import { defineMcp } from "@lovable.dev/mcp-js";
import getOverviewTool from "./tools/get-overview";
import getServicesTool from "./tools/get-services";
import getSolutionFlowTool from "./tools/get-solution-flow";
import getPartnersTool from "./tools/get-partners";

export default defineMcp({
  name: "nexcare-mcp",
  title: "NexCare",
  version: "0.1.0",
  instructions:
    "Tools for the NexCare continuous-healthcare platform. Use `get_overview` for a quick summary, `get_services` for care service details, `get_solution_flow` for the 5-step care pipeline, and `get_partners` for partner (doctor, insurer, pharmacy) offerings. All data is public marketing information.",
  tools: [getOverviewTool, getServicesTool, getSolutionFlowTool, getPartnersTool],
});