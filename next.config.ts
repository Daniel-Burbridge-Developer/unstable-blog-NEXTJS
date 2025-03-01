import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    // @ts-expect-error
    remarkPlugins: [['remark-gfm', { strict: true, throwOnError: true }]],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
