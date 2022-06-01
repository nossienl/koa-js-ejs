export const pages = [
  {
    id: 'index',
    link: '/',
    template: 'index',
    name: 'Home',
    data: {
      title: 'Home',
      people: ['niels', 'niels 2', 'niels 3'],
    },
  },
  {
    id: 'nieuws',
    link: '/nieuws',
    template: 'news',
    name: 'Nieuws',
    data: {
      title: 'Nieuws',
    },
  },
  {
    id: 'nieuws/item',
    title: 'nieuws-item',
    link: '/nieuws/item',
    template: 'news/item',
    name: 'Nieuws Item',
    data: {
      title: 'Nieuws Item',
    },
  },
  {
    id: 'profile',
    link: '/profile',
    name: 'Profile Link',
    template: 'profile',
    data: {
      title: 'Profile',
    },
  },
  {
    id: 'about',
    link: '/about',
    name: 'About us',
    template: 'about',
    data: {
      title: 'About page',
    },
  },
  {
    id: 'contact',
    link: '/contact',
    name: 'Contact',
    template: 'contact',
    data: {
      title: 'Contact page',
    },
  },
];
