const getters ={
        token:(state)=>state['my_user']['token'],
        userId:state=>state['my_user'].userInfo.userId,
        avatar:state=>state['my_user'].userInfo.staffPhoto, //头像
        name:state=>state['my_user'].userInfo.username,
        routes:state=>state['my_user'].routes
}

export default getters