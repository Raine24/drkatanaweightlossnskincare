import home_1 from '@assets/img/menu/menu-home-1.jpg';
import home_2 from '@assets/img/menu/menu-home-2.jpg';
import home_3 from '@assets/img/menu/menu-home-3.jpg';
import home_4 from '@assets/img/menu/menu-home-4.jpg';

const menu_data = [
  {
    id: 1,
    single_link: true,
    title: 'Home',
    link: '/',
  },
  {
    id: 3,
    single_link: true,
    title: 'Shop',
    link: '/shop',
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Categories',
    link: '/shop',
    sub_menus: [
      { title: 'Packages', link: '/shop?category=packages' },
      { title: 'Weight Loss', link: '/shop?category=weight-loss' },
      { title: 'Beauty Products', link: '/shop?category=beauty-products' },
      { title: 'Bedroom Products', link: '/shop?category=bedroom-products' },
      { title: 'Good Luck Miracle Products', link: '/shop?category=good-luck-miracle-products' },
      { title: 'Hips and Bums Enlargements', link: '/shop?category=hips-and-bums-enlargements' },
    ],
  },
  {
    id: 7,
    single_link: true,
    title: 'About Us',
    link: '/about',
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    single_link: true,
    title: 'Home',
    link: '/',
  },
  {
    id: 3,
    single_link: true,
    title: 'Shop',
    link: '/shop',
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Categories',
    link: '/shop',
    sub_menus: [
      { title: 'Packages', link: '/shop?category=packages' },
      { title: 'Weight Loss', link: '/shop?category=weight-loss' },
      { title: 'Beauty Products', link: '/shop?category=beauty-products' },
      { title: 'Bedroom Products', link: '/shop?category=bedroom-products' },
      { title: 'Good Luck Miracle Products', link: '/shop?category=good-luck-miracle-products' },
      { title: 'Hips and Bums Enlargements', link: '/shop?category=hips-and-bums-enlargements' },
    ],
  },
  {
    id: 7,
    single_link: true,
    title: 'About Us',
    link: '/about',
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]