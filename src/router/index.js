import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '../views/Mainpage.vue'
import Login from '../views/Login.vue'
import PersonData from '../views/PersonData.vue'
import Status from '../views/Status.vue'
import inputStatus from '../views/inputStatus.vue'
import inputPerson from '../views/inputPerson.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/mainpage',
    name: 'Mainpage',
    component: Mainpage
  },
  {
    path: '/persondata',
    name: 'PersonData',
    component: PersonData
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/inputstatus',
    name: 'inputStatus',
    component: inputStatus
  },
  {
    path: '/inputperson',
    name: 'inputPerson',
    component: inputPerson
  },

]

const router = new VueRouter({
  routes
})

export default router
