import Vue from 'vue'
import Router from 'vue-router'
import TkPage from '@/components/Page'
import TkThankyou from '@/components/Thankyou'
import Tk404 from '@/components/404'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'tk-page',
      component: TkPage,
      meta: {
        title: 'Teekiu landing page'
      }
    },
    {
      path: '/thankyou',
      name: 'tk-thankyou',
      component: TkThankyou,
      meta: {
        title: 'Thank you'
      }
    },
    {
      path: '*',
      name: 'tk-404',
      component: Tk404,
      meta: {
        title: 'Error Page'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
