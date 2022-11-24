import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../views/Article.vue'
import Preview from '../views/Preview.vue'
import Create from '../views/Create.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Article',
    component: Article
  },
  {
    path: '/article/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/article/:id',
    name: 'Preview',
    component: Preview
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
