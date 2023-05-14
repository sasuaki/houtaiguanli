import Layout from '@/Layout'

export default{
    path:"/department",
    component:Layout,
    name:"department",
    children:[
        {
            path:"",
            name:"department",
            component:()=>import('@/views/department'),  //二级路由地址为空，表示/department 显示一级路由+二级路由

            meta:{
                title:"组织",
                icon:"tree-table"
            }
        }
    ]
}