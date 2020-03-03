<template>
  <div>
    <el-form :inline="true" :model="search_model">
      <el-form-item label="商家名称">
        <el-input v-model="search_model.shopName" @input="handleSearchName"></el-input>
      </el-form-item>
      <el-form-item label="菜品推荐">
        <template>
          <el-select v-model="search_model.shoprecommendVal" placeholder="请选择" @change="handleSearchrecommendVal">
            <el-option
              v-for="item in search_model.shoprecommend"
              :key="item.text"
              :label="item.text"
              :value="item.text"
            ></el-option>
          </el-select>
        </template>
      </el-form-item>
      <el-form-item label="销量">
        <template>
          <el-select v-model="search_model.volumeval" placeholder="请选择">
            <el-option
              v-for="(item,index) in search_model.volume"
              :key="index"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </template>
      </el-form-item>
      <el-form-item>
        <el-button>搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <!-- 每一列的详情信息 -->
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.shopName }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shopName }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <div class="tag-group">
                <el-tag
                  v-for="(item,index) in props.row.tag"
                  :key="index"
                  :type="item.type"
                >{{ item.text}}</el-tag>
              </div>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.shopAddress }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.shopDesc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <!-- 每一列的信息 需要传递的数据通过prop进行传递 -->
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="店铺名称" prop="shopName" width="120"></el-table-column>
      <el-table-column label="店铺地址" prop="shopAddress" width="300"></el-table-column>
      <el-table-column label="联系电话" prop="shopTel" width="180"></el-table-column>
      <el-table-column label="店铺简介" prop="shopDesc" width="300"></el-table-column>
      <el-table-column label="推荐菜品" prop="tag" width="180">
        <template slot-scope="props">
          <div class="tag-group">
            <el-tag
              v-for="(item,index) in props.row.tag"
              :key="index"
              :type="item.type"
            >{{ item.text}}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="160">
        <template slot-scope="props">
          <div>
            <el-button size="small" type="warning" @click="handleModify(props.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDel(props.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handlePage"
    ></el-pagination>
    <!-- 对话框 -->
    <shopDialog :dialogVisible="dialogVisible" :dialogData="dialogData" @close="handleClose" />
  </div>
</template>




<script>
import { shopListApi } from "@api/request.js";
import shopDialog from "@components/shop-dialog";
export default {
  data() {
    return {
      search_model:{
        shopName:"",
        shoprecommendVal:"",
        volumeval:"",
        shoprecommend:[
                    {
                        text:"西虹市鸡蛋",
                        type:"success"
                    },
                    {
                        text:"小炒肉",
                        type:"info"
                    },
                    {
                        text:"宫保鸡丁",
                        type:"danger"
                    },
                    {
                        text:"水煮肉片",
                        type:"warning"
                    },
                    {
                        text:"爆炒腰花",
                        type:"success"
                    },{
                        text:"烤腰子",
                        type:"warning"
                    },
                    {
                        text:"甲鱼汤",
                        type:"danger"
                    }
                ],
        volume:["升序","降序"]
      },
      dialogVisible: false,
      dialogData: {},
      tableData: [],
      shopInfo: {
        limit: 10,
        page: 1
      },
      total: 0
    };
  },
  components: {
    shopDialog
  },
  created() {
    this.getShopList(this.shopInfo);
  },
  methods: {
    async getShopList(shopInfo) {
      let data = await shopListApi(shopInfo);
      this.tableData = data.dataList;
      this.total = data.total;
    },
    handlePage(page) {
      this.shopInfo.page = page;
      this.getShopList(this.shopInfo);
    },
    handleDel(data) {
      //在这里我们只需要拿到商品的id值就可以进行删除操作
      console.log(data);
      this.$alert(`您确定要删除《${data.shopName}》这条信息吗`, {
        confirmButtonText: "确定",
        callback: action => {
          //点击确定的时候我们就可以在这里进行ajax数据请求进行数据的删除里
        }
      });
    },
    handleModify(data) {
      this.dialogData = data;
      this.dialogVisible = true;
      console.log(this.dialogVisible);
    },
    handleClose(bool) {
      this.dialogVisible = bool;
    },
    handleSearchrecommendVal(value){
      //进行数据请求 后端进行关键字查询  进行返回
      console.log(value)
    },
    handleSearchName(value){
      //进行数据请求 模糊查询
      console.log(value);
    }
  }
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>