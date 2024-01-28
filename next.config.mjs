/** @type {import('next').NextConfig} */

import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
