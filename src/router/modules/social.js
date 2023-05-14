import Layout from '@/Layout'

export default{
    path:"/social",
    component:Layout,
    name:"social",
    children:[
        {
            path:"",
            name:"social",
            component:()=>import('@/views/social'),  //二级路由地址为空，表示/department 显示一级路由+二级路由

            meta:{
                title:"社保",
                icon:"tree-table"
            }
        }
    ]
}