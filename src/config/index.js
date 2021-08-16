const config = {
  title: 'Gatsby Theme Open Sourcerer',
  shortTitle: 'HackerMan',
  description: 'A minimal gatsby theme for open source developer',
  siteUrl: 'https://example.com/',
  contentPath: 'contents',
  logo: '/logo.jpg',
  seoImage: '/seo.jpg',
  heroImage: '',
  titleSeparator: '|',
  pathPrefix: '/',
  blogPath: 'blog',
  blogTitle: 'Blog',
  postPerPage: 8,
  socialShareTitle: '-: SHARE :-',
  manifest: {
    icon: 'src/assets/images/logo.svg',
    backgroundColor: `#FAFAFC`,
    themeColor: `#27283F`,
  },
  author: {
    fullName: 'Denver Coder 9',
    bio: 'Full-time open sourcerer',
    summary:
      'Eu nulla labore adipisicing consequat veniam qui ullamco. Fugiat laborum consequat elit enim quis ullamco sit minim dolor ad.',
    email: 'hello@example.com',
    skype: 'denvercoder9',
    links: {
      facebook: 'https://facebook.com/denvercoder9',
      github: 'https://github.com/denvercoder9',
      instagram: 'https://instagram.com/denvercoder9',
      linkedin: 'https://linkedin.com/denvercoder9',
      twitter: 'https://twitter.com/denvercoder9',
    },
  },
  footer: {
    title: 'Words of Thanks',
    description:
      'Sunt adipisicing culpa deserunt est est excepteur voluptate occaecat voluptate irure elit sit nostrud culpa. Deserunt est est excepteur voluptate occaecat voluptate irure elit sit',
    copyright: `© ${new Date().getFullYear()} Denver Coder 9. All Rights Reserved.`,
  },
};

module.exports = config;
