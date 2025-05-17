/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // We're using App Router with [lang] folders and middleware instead
  // of the Pages Router i18n config, so we remove the deprecated config
}

export default nextConfig
