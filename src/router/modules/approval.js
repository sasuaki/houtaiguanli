import Layout from '@/Layout'
export default{
    path:"/approval",
    component:Layout,
    name:"approval",
    children:[
        {
            path:"",
            name:"approval",
            component:()=>import('@/views/approval'),  //二级路由地址为空，表示/department 显示一级路由+二级路由
            meta:{
                title:"审核",
                icon:"tree-table"
            }
        }
    ]
}