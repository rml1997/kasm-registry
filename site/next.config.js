/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'rml1997',
    description: 'Kasm workspaces provided by rml1997',
    icon: '/img/logo.svg',
    listUrl: 'https://rml1997.github.io/kasm-registry/',
    contactUrl: 'https://github.com/rml1997/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
