import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home', meta: { requiresAuth: true } },
  { path: '/addItem', component: 'AddItem', meta: { requiresAuth: true } },
  { path: '/tests', component: 'Tests', meta: { requiresAuth: true } },
  { path: '/dashboard', component: 'Dashboard', meta: { requiresAuth: true } },
  { path: '/dashlayout', component: 'DashLayout', meta: { requiresAuth: true } },
  { path: '/lists', component: 'Lists', meta: { requiresAuth: true } },
  { path: '/options', component: 'Options', meta: { requiresAuth: true } },
  { path: '*', component: 'NotFound' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/signin')
  } else {
    next()
  }
})

export default router
