import { env } from "process";
import withMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: env.NODE_ENV === "production" ? "docs" : ".next",
  pageExtensions: ["tsx", "mdx"],
  experimental: {
    // Commented out temporarily
    // Probably need to be enabled
    // if watchdog related error happens
    // esmExternals: 'loose'
  },
};

export default withMdx()(nextConfig);
