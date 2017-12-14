<template>
  <div>
  <el-table
    :data="tableData1"
    border
    style="width: 100%">
    <el-table-column
      prop="productId"
      label="商品id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="productName"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="productIcon"
      label="图片">
    </el-table-column>
    <el-table-column
      prop="productPrice"
      label="单价">
    </el-table-column>
    <el-table-column
      prop="productStock"
      label="库存">
    </el-table-column>
    <el-table-column
      prop="productDescription"
      label="描述">
    </el-table-column>
    <el-table-column
      prop="productStatus"
      label="介绍">
    </el-table-column>
    <el-table-column
      prop="categoryType"
      label="类目">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间">
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="修改时间">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
          <el-button type="text" size="small" @click="xiugai(scope.row)">修改</el-button>
          <el-button type="text" size="small" v-show="scope.row.productStatus===0" @click="xiajia(scope.row)">下架</el-button>
          <el-button type="text" size="small" v-show="scope.row.productStatus===1" @click="shangjia(scope.row)" >上架</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="block" style="text-align: center">
      <el-pagination
        layout="prev, pager, next"
        :page-size="size"
        @current-change="handleCurrentChange"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
          tableData1:[],
          total:0,
          page:1,
          size:5,
        }
    },
  mounted(){
    this.xianshi();
  },
  methods:{
       xianshi : function () {
           this.$ajax.get('http://10.128.4.164:8080/seller/product/list?page='+this.page+'&size='+this.size)
             .then((response) =>{
                //console.log(response.data.productInfoPage);
                this.tableData1 =response.data.productInfoPage.content;
                this.total = response.data.productInfoPage.totalElements;
             })
       },
       xiugai:function (row) {
           //console.log(row);
            this.$router.push({ name: 'modifygoods', params: row});
       },
    handleCurrentChange(val) {
      this.page = val;
      console.log(this.page);
      this.xianshi();
    },
    xiajia(row){
      this.$ajax.get('http://10.128.4.164:8080/seller/product/off_sale?productId='+row.productId+'')
        .then((response) =>{
          this.$notify({
            title: '成功',
            type: 'success'
          });
          this.xianshi();
        })
    },
    shangjia(row){
      this.$ajax.get('http://10.128.4.164:8080/seller/product/on_sale?productId='+row.productId+'')
        .then((response) =>{
          this.$notify({
            title: '成功',
            type: 'success'
          });
          this.xianshi();
        })
    },
  }

}
</script>
<style lang="less" scoped>


</style>
