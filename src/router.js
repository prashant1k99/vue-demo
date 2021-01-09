/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.  
==========================================================================================*/

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        authRequired: true
      }
    }
    // {
    //   path: '/create',
    //   name: 'create-post',
    //   component: () => import('./views/Post/Create.vue'),
    //   meta: {
    //     authRequired: true
    //   }
    // },
    // {
    //   path: '/view/:id',
    //   name: 'view-post',
    //   component: () => import('./views/Post/View.vue'),
    //   meta: {
    //     authRequired: true
    //   }
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('./views/Login.vue'),
    //   meta: {
    //     authRequired: false
    //   }
    // },
    // {
    //   path: '/error-404',
    //   name: 'error',
    //   component: () => import('./views/Error.vue'),
    //   meta: {
    //     authRequired: true
    //   }
    // },
    // {
    //   path: '*',
    //   redirect: '/error-404'
    // }
  ]
})

router.beforeEach((to, _, next) => {
  if (to.meta.authRequired === true) {
    // NOTE run the logic for checking auth
  } else if (to.meta.authRequired === false) {
    // NOTE for check on pages like login
  } else {
    return next()
  }
})

export default router