<template>
  <div>
    <el-steps :active="active" align-center>
      <el-step title="个人基本信息" description="请正确填写您的基本信息"></el-step>
      <el-step title="手机号验证" description="确保用户的安全请绑定手机号、微信号"></el-step>
      <el-step title="银行卡绑定" description="收入金额请绑定银行卡"></el-step>
    </el-steps>
    <div>
      <el-button @click="prev">上一步</el-button>
      <el-button @click="next">下一步</el-button>
    </div>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import One from "./components/one";
import Two from "./components/two";
import Three from "./components/three";
export default {
  name: "stepsCom",
  data() {
    return {
      comName: "One",
      active: 1
    };
  },
  components: {
    One,
    Two,
    Three
  },
  methods: {
    prev() {
      if (this.active == 0) {
        this.active = 0;
      } else {
        this.active--;
      }

      this.handleToggle();
    },
    next() {
      if (this.active == 3) {
        this.active = 3;
      } else {
        this.active++;
      }

      this.handleToggle();
    },
    handleToggle() {
      switch (this.active) {
        case 1:
          this.comName = "One";
          break;
        case 2:
          this.comName = "Two";
          break;
        case 3:
          this.comName = "Three";
          break;
      }
    }
  }
};
</script>

<style lang="">
</style>