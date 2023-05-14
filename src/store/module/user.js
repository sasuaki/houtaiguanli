import {setToken,getToken,removeToken} from '@/utils/auth'
import { getUserInfo, login } from '@/api/user'
import {constantRoutes} from "@/router"


const state=()=>{
    return {
        token:getToken(),
        userInfo:{},
        routes:constantRoutes
    }
}

const mutations={
    setToken(state,token){
        state.token=token
        // 同步到缓存
        setToken(token)
    },
    removeToken(state){
        // 删除vuex中的token
        state.token=null
        removeToken()
    },
    setUserInfo(state,userInfo){
        state.userInfo=userInfo
    },
    setRoutes(state,newRoutes){
        // 静态路由+动态路由
        state.routes=[...constantRoutes,...newRoutes]
    }
}

const actions={
    // context 上下文  传入参数
    async login(context,data){
        // 3.调用登录接口
       let res = await login(data)
    //    4.token存储
    //    console.log(res);
       context.commit('setToken',res)
    },
    async getUserInfo(context){
        const res=await getUserInfo()
        context.commit('setUserInfo',res)
        return res
    },
    logout(context){
        context.commit('removeToken')  //删除token
        // 设置用户信息为空对象
        context.commit('setUserInfo',{})
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}