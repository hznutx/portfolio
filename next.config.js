/** @type {import('next').NextConfig} */

module.exports = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
   images: {
    remotePatterns: [new URL('https://cdn.pixabay.com/photo/**')],
  },
};
