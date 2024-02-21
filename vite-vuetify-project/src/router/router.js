import { createRouter, createWebHashHistory } from 'vue-router'

import About from '../views/About.vue'
import Clothes from '../views/Clothes.vue'
import Shoes from '../views/Shoes.vue'
import Home from '../views/Home.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: About,
      path: '/about'
    },
    {
      component: Clothes,
      path: '/clothes'
    },
    {
      component: Shoes,
      path: '/shoes'
    },
    {
      component: Home,
      path: '/'
    }
  ]
})