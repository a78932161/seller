<template>
  <div>
    <el-table
      :data="tableData2"
      border
      style="width: 100%">
      <el-table-column
        prop="orderId"
        label="订单id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="buyerName"
        label="姓名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="buyerPhone"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="buyerAddress"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="orderAmount"
        label="金额">
      </el-table-column>
      <el-table-column
        prop="orderStatus"
        label="订单状态">
      </el-table-column>
      <el-table-column
        prop="buyerOpenid"
        label="支付方式">
      </el-table-column>
      <el-table-column
        prop="payStatus"
        label="支付状态">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建"
        width="150"
      >
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="xianqing">详情</el-button>
          <el-button type="text" size="small" v-show="scope.row.orderStatus===0" @click="quxiao(scope.row)">取消</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="text-align: center">
      <el-pagination
        layout="prev, pager, next"
        :page-size="size"
        :total="total"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        tableData2:[],
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
        this.$ajax.get('http://10.128.4.164:8080/seller/order/list?page='+this.page+'&size='+this.size)
          .then((response) =>{
          console.log(response.data.orderDTOPage.totalElements);
            this.tableData2 =response.data.orderDTOPage.content;
            this.total = response.data.orderDTOPage.totalElements;
          })
      },
      handleCurrentChange(val) {
        this.page = val;
        this.xianshi();
      },
      xianqing(){

      },
      quxiao(row){

        this.$ajax.get('http://10.128.4.164:8080/seller/order/cancel?orderId='+row.orderId)
          .then((response) =>{
            this.$notify({
              title: '成功',
              type: 'success'
            });
            this.xianshi();
          })

      }

    }

  }
</script>
<style lang="less" scoped>

</style>
