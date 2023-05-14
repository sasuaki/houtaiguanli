<template>
    <div class="login-page">
        <el-card class="el-card">
            <template #header>后台系统</template>
            <el-form label-width="80px" :model="form" :rules="rules" ref="form">
                <el-form-item label="手机号" prop="mobile">
                    <el-input placeholder="请输入手机号" v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="请输入密码" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
// import { mapActions } from 'vuex';

    export default {
        data(){
            return{
                form:{
                    // NODE_ENV为环境变量
                    mobile:process.env.NODE_ENV ==='development'?'13800000002':"",
                    password:process.env.NODE_ENV==='development'?'123456':""
                },
                rules:{
                    mobile:[
                        {required:true,message:"请输入手机号",trigger:['blur']},
                    ],
                    password:[
                        {required:true,message:"请输入密码",trigger:['blur']},
                        {pattern:/^\w{5,11}/,message:"请输入5到11位的密码",trigger:['blur']}
                    ],
                }
            }
        },
        methods:{
            // ...mapActions('my_user',['login']),
            login(){
                this.$refs.form.validate(async isOk=>{
                    if(isOk){
                        // 2.调用vuex的action
                        await this.$store.dispatch('my_user/login',this.form)

                        // 跳转到主页
                        this.$router.push('/')
                    }
                })
               
            }
        }
    }
</script>

<style lang="scss" >

.login-page{
    height: 100%;
    position: relative;
    background-color: pink;
}

.el-card{
    position: absolute;
    width: 420px;
    height: 280px;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    ::v-deep .el-card__header{
        line-height: 40px;
        text-align: center;
    }

}
</style>