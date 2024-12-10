export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'hznutx',
  description: 'work with Frontend Developer - Nuttakarn P.,BKK Thailand',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },

    {
      label: 'About',
      href: '/about',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },

    {
      label: 'Projects',
      href: '/projects',
    },
  ],
  links: {
    github: 'https://github.com/hznutx',
    twitter: 'https://twitter.com/hznutx',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
