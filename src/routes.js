import { CardShowPage, OurApp, NotFound } from './pages';

export const routes = [
  {
    path: '/',
    component: OurApp,
  },
  {
    path: '/cards/:id',
    component: CardShowPage,
  },
];

export const notFound = {
  component: NotFound,
};
