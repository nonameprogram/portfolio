import {
  SiDocker,
  SiDockerHex,
  SiFastify,
  SiFastifyHex,
  SiGithubactions,
  SiGithubactionsHex,
  SiJavascript,
  SiJavascriptHex,
  SiLaravel,
  SiLaravelHex,
  SiMongodb,
  SiMongodbHex,
  SiMysql,
  SiMysqlHex,
  SiNestjs,
  SiNestjsHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiReact,
  SiReactHex,
  SiRedis,
  SiRedisHex,
  SiSass,
  SiSassHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
} from "@icons-pack/react-simple-icons";

export const techStacks = [
  {
    images: [
      {
        logo: (
          <SiJavascript
            className="!fill-white !text-white size-8"
            color={SiJavascriptHex}
          />
        ),
      },
      {
        logo: (
          <SiTypescript
            className="!fill-white !text-white size-8"
            color={SiTypescriptHex}
          />
        ),
      },
    ],
  },
  {
    images: [
      {
        logo: (
          <SiReact
            className="!fill-white !text-white size-8"
            color={SiReactHex}
          />
        ),
      },
      {
        logo: (
          <SiNextdotjs
            className="!fill-white !text-white size-8"
            color={SiNextdotjsHex}
          />
        ),
      },
    ],
  },
  {
    images: [
      {
        logo: (
          <SiNestjs
            className="!fill-white !text-white size-8"
            color={SiNestjsHex}
          />
        ),
      },
      {
        logo: (
          <SiFastify
            className="!fill-white !text-white size-8"
            color={SiFastifyHex}
          />
        ),
      },
      {
        logo: (
          <SiNodedotjs
            className="!fill-white !text-white size-8"
            color={SiNodedotjsHex}
          />
        ),
      },
      {
        logo: (
          <SiLaravel
            className="!fill-white !text-white size-8"
            color={SiLaravelHex}
          />
        ),
      },
    ],
  },
  {
    images: [
      {
        logo: (
          <SiMysql
            className="!fill-white !text-white size-8"
            color={SiMysqlHex}
          />
        ),
      },
      {
        logo: (
          <SiPostgresql
            className="!fill-white !text-white size-8"
            color={SiPostgresqlHex}
          />
        ),
      },
      {
        logo: (
          <SiMongodb
            className="!fill-white !text-white size-8"
            color={SiMongodbHex}
          />
        ),
      },
      {
        logo: (
          <SiRedis
            className="!fill-white !text-white size-8"
            color={SiRedisHex}
          />
        ),
      },
    ],
  },
  {
    images: [
      {
        logo: (
          <SiTailwindcss
            className="!fill-white !text-white size-8"
            color={SiTailwindcssHex}
          />
        ),
      },
      {
        logo: (
          <SiSass
            className="!fill-white !text-white size-8"
            color={SiSassHex}
          />
        ),
      },
    ],
  },
  {
    images: [
      {
        logo: (
          <SiDocker
            className="!fill-white !text-white size-8"
            color={SiDockerHex}
          />
        ),
      },
      {
        logo: (
          <SiGithubactions
            className="!fill-white !text-white size-8"
            color={SiGithubactionsHex}
          />
        ),
      },
    ],
  },
];

export const certifications = [
  {
    provider: {
      url: "https://courses.nestjs.com",
      name: "Official NestJS Courses",
    },
    certificate: {
      label: "NestJS Architecture & Advanced Patterns",
      issueDate: "Jan 2026",
      completed: true,
      credentialUrl: "/certs/nestjs-architecture-advanced-patterns.pdf",
    },
  },
  {
    provider: {
      url: "https://courses.nestjs.com",
      name: "Official NestJS Courses",
    },
    certificate: {
      label: "NestJS Advanced Concepts",
      issueDate: "Jan 2026",
      completed: true,
      credentialUrl: "/certs/nestjs-advanced-concepts.pdf",
    },
  },
];
