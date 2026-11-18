export interface ProcessStep {
  deliverables: string[];
  number: string;
  text: string;
  title: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    text: "A focused conversation about your goals, users, and constraints. Together we turn an idea into a clear scope, priorities, and a realistic plan.",
    deliverables: ["Scope & priorities", "Estimate & timeline"],
  },
  {
    number: "02",
    title: "Prototype",
    text: "Validating the vision before committing to it. AI-assisted rapid prototyping tests the user experience and technical feasibility early.",
    deliverables: ["Clickable prototype", "Technical benchmarks"],
  },
  {
    number: "03",
    title: "Build",
    text: "Iterative development in short cycles. Type-safe, tested, and documented code, with regular demos so you always see real progress.",
    deliverables: ["Regular demos", "Tests & documentation"],
  },
  {
    number: "04",
    title: "Launch & Support",
    text: "Automated, predictable deployments to production, followed by performance monitoring and continuous improvement as your product grows.",
    deliverables: ["CI/CD deployment", "Monitoring & maintenance"],
  },
];
