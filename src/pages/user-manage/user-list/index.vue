<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border
     @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="id" label="用户Id" width="150"></el-table-column>
      <el-table-column label="停用/启动" width="120">
        <template slot-scope="props">
          <div>
            <el-switch v-model="props.row.status" @change="handleStatusChange(props.row)"></el-switch>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="username" label="登陆账号" width="120"></el-table-column>
      <el-table-column prop="fullname" label="真实姓名" width="120"></el-table-column>
      <el-table-column prop="auth" label="用户角色" width="120"></el-table-column>
      <el-table-column prop="firstTimeDate" label="注册时间" width="200"></el-table-column>
      <el-table-column prop="email" label="邮箱地址" width="300"></el-table-column>
      <el-table-column prop="lastTimeDate" label="最近登陆时间" width="200"></el-table-column>
      <el-table-column width="200" label="操作" fixed="right">
        <template>
          <div>
            <el-button size="mini">永久删除</el-button>
            <el-button size="mini">权限设置</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="total"
  @current-change="handlePageChange"
  >
</el-pagination>
  </div>
</template>

<script>
import { userListApi } from "@api/request.js";
export default {
  data() {
    return {
      userInfo: {
        limit: 10,
        page: 1
      },
      tableData: [],
      total: 0
    };
  },
  created() {
    this.getUserList(this.userInfo);
  },
  methods: {
    async getUserList(userInfo) {
      let data = await userListApi(userInfo);
      this.tableData = data.data;
      this.total = data.total;
    },
    handleStatusChange(info){
        console.log(info);
    },
    handleSelectionChange(datalist){
        //一般情况下用来做批量删除
        console.log(datalist);
    },
    handlePageChange(page){
        this.userInfo.page = page;
        this.getUserList(this.userInfo);
    }
  }
};
</script>

<style lang="">
</style>