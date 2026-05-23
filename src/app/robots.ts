import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}
