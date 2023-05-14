import Layout from '@/Layout'

export default{
    path:"/salary",
    component:Layout,
    name:"salary",
    children:[
        {
            path:"",
            name:"salary",
            component:()=>import('@/views/salary'),  //二级路由地址为空，表示/department 显示一级路由+二级路由

            meta:{
                title:"工资",
                icon:"tree-table"
            }
        }
    ]
}