import Layout from '@/Layout'

export default{
    path:"/employee",
    component:Layout,
    name:"employee",
    children:[
        {
            path:"",
            name:"employee",
            component:()=>import('@/views/employee'),  //二级路由地址为空，表示/department 显示一级路由+二级路由

            meta:{
                title:"员工",
                icon:"tree-table"
            }
        }
    ]
}