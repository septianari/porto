import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubPages ? '/porto' : '');
const assetPrefix = basePath ? `${basePath}/` : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix,
};

export default nextConfig;
