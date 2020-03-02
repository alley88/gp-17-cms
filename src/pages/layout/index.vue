<template>
  <el-container>
    <el-aside width="200px">
      <sliderTabbar />
    </el-aside>
    <container />
  </el-container>
</template>

<script>
import sliderTabbar from "./components/sliderTabbar";
import container from "./components/container";
export default {
  name: "layout",
  components: {
    sliderTabbar,
    container
  }
};
</script>

<style lang="scss">

.header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.el-container {
  height: 100%;
}
</style>