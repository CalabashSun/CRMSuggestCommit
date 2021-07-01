/* eslint-disable */
//import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'


import suggest from '../page/suggest.vue'


const routes = [{
  path: '/',
  name: '',
  component: suggest,
  meta:{
    title: "花味烤肉评价"
  }
},{
  path: '/suggest',
  name: 'suggest',
  component: suggest,
  meta:{
    title: "花味烤肉评价"
  }
}]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const defaultTitle = 'home'; 
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});
/* eslint-enable */
export default router;
