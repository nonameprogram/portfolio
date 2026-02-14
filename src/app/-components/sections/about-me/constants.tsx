import { SiTypescript } from "@icons-pack/react-simple-icons";
import { RocketIcon } from "@radix-ui/react-icons";
import { FlaskConicalIcon, ShieldIcon } from "lucide-react";

export const aboutMeEntries = [
  {
    icon: <SiTypescript className="size-6 fill-violet-300" />,
    title: "Type-safe approach",
    text: "Seamlessly bringing API types into the web environment with OpenAPI, monorepos, and automated code generation, regardless of the programming language or framework.",
  },
  {
    icon: <RocketIcon className="size-6 text-violet-300" />,
    title: "Performance",
    text: "Optimizing build and test times by choosing the right tools, leveraging caching, and ensuring effective code-splitting, while continuously identifying and eliminating performance bottlenecks.",
  },
  {
    icon: <FlaskConicalIcon className="size-6 text-violet-300" />,
    title: "Testing & Quality",
    text: "Ensuring high code quality through unit, integration, and end-to-end testing. Catching issues early and maintaining confidence when refactoring or shipping new features.",
  },
  {
    icon: <ShieldIcon className="size-6 text-violet-300" />,
    title: "Security",
    text: "Applying modern security standards and best practices, including secure authentication flows, proper data validation, monitoring including OpenTelemetry and safe API communication.",
  },
];
