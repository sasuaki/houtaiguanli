import Layout from '@/Layout'

export default{
    path:"/attendance",
    component:Layout,
    name:"attendance",
    children:[
        {
            path:"",
            name:"attendance",
            component:()=>import('@/views/attendance'),  //二级路由地址为空，表示/department 显示一级路由+二级路由

            meta:{
                title:"考勤",
                icon:"tree-table"
            }
        }
    ]
}