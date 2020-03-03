<template>
  <el-dialog title="商品信息更改" :visible.sync="dialogFlag" width="60%" :before-close="handleClose">
    <el-form :model="dialogInfo" label-width="80px" label-position="right">
      <el-form-item label="店铺名称">
        <el-input type="text" v-model="dialogInfo.shopName"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址">
        <el-input type="text" v-model="dialogInfo.shopAddress"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input type="text" v-model="dialogInfo.shopTel"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input type="text" v-model="dialogInfo.shopDesc"></el-input>
      </el-form-item>
      <el-form-item label="推荐菜品">
        <!-- 默认的数据 -->
        <el-tag
          :key="index"
          v-for="(item,index) in dialogInfo.tag"
          closable
          :disable-transitions="false"
          @close="handleTagClose(index)"
        >{{item.text}}</el-tag>

        <!-- 添加数据的时候会显示的input -->
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        ></el-input>
        <!-- 新增的按钮 -->
        <el-button v-else class="button-new-tag" size="small" @click="showInput">添加推荐菜品</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(dialogInfo)">修改</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: "shopDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    dialogData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      inputVisible: false,
      dialogFlag: false,
      inputValue: "",
      dialogInfo: {}
    };
  },
  watch: {
    dialogVisible(newVal) {
      this.dialogFlag = newVal;
    },
    dialogData(newVal) {
      this.dialogInfo = newVal;
    }
  },
  methods: {
    handleClose() {
      this.$emit("close", false);
    },
    submitForm(updata) {
      //只要获取到ID值 将id值传递到后端进行数据的更改即可
      console.log(updata);

      //如果成功
      this.$message({
        message: "恭喜你，修改成功",
        type: "success",
        onClose: () => {
          this.$emit("close", false);
        }
      });
    },
    //删除
    handleTagClose(index) {
      this.dialogInfo.tag.splice(index,1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dialogInfo.tag.push({text:inputValue,type:"success"});
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>

<style>
</style>