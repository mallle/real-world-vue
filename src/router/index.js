import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'
import EventCreate from '../views/EventCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event',
    name: 'event-show',
    component: EventShow
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  }
  // {
  //   path: '/about-us',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // //example of an redirect frpm the /about-us to the about
  // {
  //   path: '/about', //Old path
  //   redirect: { name: 'About' } //where the old path should redirect to
  // }
]

const router = new VueRouter({
  routes
})

export default router
