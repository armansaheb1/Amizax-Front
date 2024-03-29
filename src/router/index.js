import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import NotFound from '@/components/NotFound'

import globals from '@/globals'

import dashboardsRoutes from './dashboards'
import pagesRoutes from './pages'

Vue.use(Router)
Vue.use(Meta)

const ROUTES = [
  // Default route
]
  .concat(dashboardsRoutes)
  .concat(pagesRoutes)

// 404 Not Found page
ROUTES.push({
  path: '*',
  component: NotFound,
  beforeEnter(to, from, next) {
      window.location.href = "https://www.amizax.com/api/v1/notFound";
    }
})

const router = new Router({
  base: '/',
  mode: 'history',
  routes: ROUTES
})

router.afterEach(() => {
  // Remove initial splash screen
  const splashScreen = document.querySelector('.app-splash-screen')
  if (splashScreen) {
    splashScreen.style.opacity = 0
    setTimeout(() =>
      splashScreen && splashScreen.parentNode && splashScreen.parentNode.removeChild(splashScreen)
    , 1)
  }

  // On small screens collapse sidenav
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }

  // Scroll to top of the page
  globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
  // Set loading state
  document.body.classList.add('app-loading')

  // Add tiny timeout to finish page transition
  setTimeout(() => next(), 10)
})

export default router
