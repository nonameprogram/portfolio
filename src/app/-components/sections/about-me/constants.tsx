import { RocketIcon } from "@radix-ui/react-icons";
import { FlaskConicalIcon, ShieldIcon } from "lucide-react";
import { SiTypescript } from "@icons-pack/react-simple-icons";

export const aboutMeEntries = [
  {
    icon: <SiTypescript className="fill-violet-300 size-6" />,
    title: "Type-safe approach",
    text: "Seamlessly bringing API types into the web environment with OpenAPI, monorepos, and automated code generation, regardless of the programming language or framework.",
  },
  {
    icon: <RocketIcon className="text-violet-300 size-6" />,
    title: "Performance",
    text: "Optimizing build and test times by picking right tools, caching and making sure code-splitting is effective. Continuously tracking and eliminating latency and performance bottlenecks in applications.",
  },
  {
    icon: <FlaskConicalIcon className="text-violet-300 size-6" />,
    title: "Testing & Quality",
    text: "Ensuring high code quality through unit, integration, and end-to-end testing. Catching issues early and maintaining confidence when refactoring or shipping new features.",
  },
  {
    icon: <ShieldIcon className="text-violet-300 size-6" />,
    title: "Security",
    text: "Applying modern security standards and best practices, including secure authentication flows, proper data validation, monitoring including OpenTelemetry and safe API communication.",
  },
];
