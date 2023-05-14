import Vue from 'vue'
import store from '@/store';
import VueRouter from 'vue-router'
import NProgress from "nprogress"; // 导入 nprogress模块
import "nprogress/nprogress.css"; // 导入样式，否则看不到效果


Vue.use(VueRouter)

// 引入路由对象
import Layout from '@/Layout'
import departmentRouter from './modules/department'
import roleRouter from './modules/role'
import employeeRouter from './modules/employee'
import permissionRouter from './modules/permission'
import salaryRouter from './modules/salary'
import socialRouter from './modules/social'
import attendanceRouter from './modules/attendance'
import approvalRouter from './modules/approval'


// 静态路由
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect:'/dashboard',
    children:[
      {
        path:'dashboard',
        name:'Dashboard',
        component:()=>import('@/views/Home'),
        meta:{title:"首页",icon:"tree-table"}
      }
    ],
    
  },
  {
    path:'/login',
    component:()=>import('@/views/Login'),
    hidden:true
  },
  {
    path:'/404',
    component:()=>import('@/views/NotFound'),
    hidden:true
  }
]


// 动态路由
export const asyncRoutes=[
 departmentRouter,
 roleRouter,
 employeeRouter,
 permissionRouter ,
 salaryRouter, 
 socialRouter ,
 attendanceRouter ,
 approvalRouter, 
]

const router = new VueRouter({
  routes:constantRoutes  //默认引入静态路由
})

// 白名单
const whiteList=['/login','/404']
router.beforeEach(async(to,from,next)=>{
  NProgress.start(); //开启进度条
  if(store.getters.token){
    // 存在token
    if(to.path==="/login"){
      next('/')
      NProgress.done()
    }else{
      // 判断是否获取过资料,若没有,获取资料
      if(!store.getters.userId){
        let {roles:{menus}}= await store.dispatch('my_user/getUserInfo')
        // menus获取用户权限标识
        // console.log(menus,'res');
        // 根据权限筛选出用户拥有哪些路由
        const filterRoutes=asyncRoutes.filter(item=>{
          return menus.includes(item.name)
        })
        // console.log(filterRoutes,'123');
        store.commit('my_user/setRoutes',filterRoutes)

        // 动态添加路由信息到路由表里
        router.addRoutes([...filterRoutes,{path:"*",redirect:'/404'}])

        // 添加动态路由之后转发
        next(to.path) //刷新一下，让路由拥有信息
      
      }else{
        next()
      }
    }
  }else{
    // 没有token
    // 判断是否在白名单
    if(whiteList.includes(to.path)){
      next()
    }else{
      next('/login')
      NProgress.done()
    }
  }
  next
})


router.afterEach((to,from,next)=>{
  NProgress.done(); //完成进度条
})

export default router
