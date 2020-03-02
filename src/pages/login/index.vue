<template>
  <div class="login_container">
    <div>
      <h2>GP-17-后台管理系统</h2>
      <el-form :model="login_model" :rules="rules">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" type="text" v-model="login_model.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="text" prefix-icon="el-icon-cpu" v-model="login_model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="handlelogin()">sign in</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { loginApi } from "@api/request.js";
export default {
  data() {
    return {
      rules: {
        username: [
          {
            required: true,
            message: "当前信息是必须填写的"
          }
        ],
        password: [
          {
            required: true,
            message: "当前信息是必须填写的"
          },
          {
            min: 3,
            max: 5,
            message: "密码的长度只能在3-5之间"
          }
        ]
      },
      login_model: {
        username: "admin",
        password: "admin"
      }
    };
  },
  methods: {
    async handlelogin() {
      let data = await loginApi(this.login_model);
      if (data.code == 200) {
        this.$message({
          message: "登陆成功",
          type: "success",
          onClose:()=>{
              //保存authToken
             this.$store.commit("handleAuthToken",data.data.authToken)
             this.$router.push("/home");
          }
        });
      }else{
          this.$message({
          message: data.data.info,
          type: "error"
        });
      }
    }
  }
};
</script>
<style>
.login_container {
  width: 100%;
  height: 100%;
  background: #324057;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_container > div {
  width: 420px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_container form {
  width: 100%;
}
.login_container h2 {
  margin-top: 10px;
  margin-bottom: 16px;
  color: #333;
}
.login_container .el-form-item__content .el-button {
  width: 100%;
}
</style>