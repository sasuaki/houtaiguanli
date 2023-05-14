<template>
    <div>
        <el-scrollbar wrap-class="scrollbar-wraper">
            <el-menu
            :default-active="activeMenu"
            :unique-opened="true"
            active-text-color="red"
            mode="vertical"
            router
            >
                <SidebarItem 
                v-for="route in routes"
                :key="route.path"
                :item="route"
                :base-path="route.path"
                ></SidebarItem>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem.vue';
    export default {
        components:{
            SidebarItem
        },
        computed:{
            ...mapGetters(['routes']),
            activeMenu(){
                const route=this.$route
                const {path}=route
                if(path==="/dashboard"){
                    return "/"
                }else{
                    return path
                }
            }
        }
    }
</script>

<style scoped>

</style>