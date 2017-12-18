import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddGoods from '@/components/AddGoods'
import GoodsList from '@/components/GoodsList'
import Modifygoods from '@/components/Modifygoods'
import Order from '@/components/Order'
import categorylist from '@/components/CategoryList'
import modifycategory from '@/components/Modifycategory'
import addcategory from '@/components/Addcategory'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/addgoods',
      name: 'addgoods',
      component: AddGoods
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: GoodsList
    },
    {
      path: '/modifygoods',
      name: 'modifygoods',
      component: Modifygoods
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/categorylist',
      name: 'categorylist',
      component: categorylist
    },
    {
      path: '/modifycategory',
      name: 'modifycategory',
      component: modifycategory
    },
    {
      path: '/addcategory',
      name: 'addcategory',
      component: addcategory
    },
  ]
})
