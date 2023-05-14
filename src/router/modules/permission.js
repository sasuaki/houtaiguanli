import Layout from '@/Layout'

export default{
    path:"/permission",
    component:Layout,
    name:"permission",
    children:[
        {
            path:"",
            name:"permission",
            component:()=>import('@/views/permission'),  //二级路由地址为空，表示/department 显示一级路由+二级路由

            meta:{
                title:"权限",
                icon:"tree-table"
            }
        }
    ]
}