/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { dirs: ['classes', 'enums', 'interfaces', 'layouts', 'types'] },
  experimental: { reactCompiler: true },
};

export default nextConfig;
