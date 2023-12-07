/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Bittles Registry',
    description: 'Ubuntu with vivaldi.',
    icon: '/img/logo.svg',
    listUrl: 'https://bittles.github.io/workspaceregistry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/workspaceregistry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
