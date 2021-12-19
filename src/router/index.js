import { createRouter, createWebHistory } from 'vue-router'
import RE_Gift from "@/components/content/ReMaker/Children/RE_Gift/RE_Gift";
import RE_Abi from "@/components/content/ReMaker/Children/RE_Abi/RE_Abi";
import RE_Life from "@/components/content/ReMaker/Children/RE_Life/RE_Life";
import ReMaker from "@/components/content/ReMaker/ReMaker";
import RE_Start from "@/components/content/ReMaker/Children/RE_Start/RE_Start";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ReMaker,
    children:[{
        path: '/',
        name: 'Start',
        component: RE_Start
      },
      {
        path: '/gift',
        name: 'Gift',
        component: RE_Gift
      },
      {
        path:'/abi',
        name: 'Abi',
        component: RE_Abi
      },
      {
        path:'/life',
        name:'Life',
        component: RE_Life
      }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
