import { createRouter, createWebHistory } from 'vue-router';
import routes from 'vue-auto-routing';
import { createRouterLayout } from 'vue-router-layout';

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue');
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/searchGroup' },
    {
      path: '/',
      component: RouterLayout,
      children: routes,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/error/404',
    },
  ],
});

export default router;
