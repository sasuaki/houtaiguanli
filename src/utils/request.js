import axios from 'axios'

import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'

const service = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,  //基础地址
    timeout:3000  //超时时间
})

// 请求拦截
service.interceptors.request.use(config=>{
    if(store.getters.token){
        config.headers.Authorization=`Bearer ${store.getters.token}`
    }
    return config
},err=>{
    return Promise.reject(err)
})

// 响应拦截
service.interceptors.response.use(response=>{
    // 结构数据
    const {data,message,success}=response.data
    if(success){
        return data
    }else{
        Message({type:'error',message})
        return Promise.reject(new Error(message))
    }
    // return response
},error=>{
    if(error.response.status===401){
        Message({type:"warning",message:"token超时了"})
        // 调用action
        store.dispatch('my_user/logout')
        // 跳转到登录页面
        router.push('/login')
        Message.error(error.message)
        return Promise.reject(error)
    }
    return Promise.reject(error)
})

export default service