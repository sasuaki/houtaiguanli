<template>
<el-container>
    <el-header>
        <el-button @click="handleConfirm" type="primary">退出</el-button>
        <img v-if="avatar" :src="avatar" style="width: 60px;">
        <!-- 可选链操作符 意思为？前面的量为空时，它不会继续往下执行，防止报错，如果不支持，需要升级版本
        npm i vue@2.7.0  vue-template-compiler@2.7.0 -->
        <span v-else class="username">{{ name?.charAt(0) }}</span>
        <span>{{ name }}</span>
    </el-header>
    <el-container>
        <el-aside width="200px">
            <Sidebar></Sidebar>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import { mapGetters } from 'vuex';

    export default {
        components:{
            Sidebar
        },
        computed:{
            ...mapGetters(['avatar','name','routes'])
        },
        methods:{
            handleConfirm(){
                this.$store.commit('my_user/removeToken')
                this.$router.push('/login')
            }
        }
    }
</script>

<style  scoped>
.username{
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    background: #f00;
    color: #fff;
    margin-right: 50px;
}
.el-header{
    position:relative;
    background-color:grey;
    color: #333;    
    line-height: 60px;
}
.el-button{
    height: 60px;
}
.el-header img{
    position: absolute;
    right: 80px;
}
.el-header span{
    position: absolute;
    width: 60px;
    height: 60px;
    line-height: 60px;
    right: 20px;
}
.el-aside{
    background-color: grey;
    color: #333;
}
.el-container{
    height: 100%;
}
</style>