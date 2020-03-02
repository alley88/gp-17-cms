<template>
  <div class="sliderTab">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#eee"
      active-text-color="#4dbcff"
    >
      <template v-for="item in sliders">
        <!-- 拥有子标题 -->
        <el-submenu
          :index="item.path"
          :key="item.path"
          v-if="item.children&&item.children.length>0"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.text}}</span>
          </template>
          <el-menu-item 
            v-for="child in item.children" 
            :key="child.path" :index="child.path"
            @click="handlePush(child.path)"
            >
            <i :class="child.icon"></i>
            <span slot="title">{{item.text}}</span>
          </el-menu-item>
        </el-submenu>

        <!-- 没有子标题的 -->
        <el-menu-item 
            :key="item.path" 
            :index="item.path" 
            v-else
            @click="handlePush(item.path)"
            >
          <i :class="item.icon"></i>
          <span slot="title">{{item.text}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //默认选中的样式
      defaultActive: "/home",
      // 这个导航的配置项其实是后端给你的，并不是前端写死的
      sliders: [
        {
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          path: "/shop",
          text: "商品管理",
          icon: "el-icon-s-shop",
          children: [
            {
              path: "/shopManage/businessList",
              text: "商家列表",
              icon: "el-icon-s-flag"
            },
            {
              path: "/shopManage/businessManage",
              text: "商家管理",
              icon: "el-icon-s-order"
            },
            {
              path: "/shopManage/orderList",
              text: "订单列表",
              icon: "el-icon-platform-eleme"
            }
          ]
        },
        {
          path: "/user",
          text: "用户管理",
          icon: "el-icon-user-solid",
          children: [
            {
              path: "/usermanage/userlist",
              text: "用户列表",
              icon: "el-icon-s-cooperation"
            }
          ]
        }
      ]
    };
  },
  watch:{
      "$route":{
          handler(to){
              this.defaultActive = to.path;
              console.log(this.defaultActive)
          },
          immediate:true
      }
  },
  methods:{
      handlePush(path){
          this.$router.push(path);
      }
  }
};
</script>


<style>
.sliderTab {
  height: 100%;
  background: rgb(48, 65, 86);
}
</style>