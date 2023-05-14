import Layout from '@/Layout'

export default{
    path:"/role",
    component:Layout,
    name:"role",
    children:[
        {
            path:"",
            name:"role",
            component:()=>import('@/views/role'),  //二级路由地址为空，表示/department 显示一级路由+二级路由
  
            meta:{
                title:"角色",
                icon:"tree-table"
            }
        }
    ]
}