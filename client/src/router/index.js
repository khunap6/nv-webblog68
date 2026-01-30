import { createRouter, createWebHistory } from 'vue-router'
// Import Components
import UserIndex from '../components/Users/Index.vue'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user',
      name: 'user',
      component: UserShow
    },
    {
      path: '/user/edit/:userId', // เพิ่ม :userId เพื่อรับค่า
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId', // เพิ่ม :userId
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})

export default router