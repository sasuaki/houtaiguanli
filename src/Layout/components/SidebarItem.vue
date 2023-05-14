<template>
    <div v-if="!item.hidden">
                <el-menu-item :index="item.path">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{item.children[0].meta.title}}</span>
                </el-menu-item>
    </div>
</template>

<script>


    export default {
        props:{
            item:{
                type:Object,
                required:true
            },
            basePath:{
                type:String,
                default:""
            }
        }
    }
</script>

<style scoped>

</style>