<template>
  <el-header class="header">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item 
        v-for="(item,index) in breadcrumb" 
        :key="index"
        :to="{ path: item.path }"
        >{{item.text}}</el-breadcrumb-item>
      
    </el-breadcrumb>
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        alley
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>
<script>
export default {
    name:"container_header",
    data(){
        return {
            breadcrumb:[]
        }
    },
    watch:{
        "$route":{
            handler(to){
                this.breadcrumb = to.meta.breadcrumb;
            },
            immediate:true
        }
    }
}
</script>


<style>
    
</style>