import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import PatientList from '../views/patient/list.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path: '/patient/list',
          name: 'patient/list',
          component: PatientList,
        },
      ]
    },

  ]
})


export default router
