<template>
  <div>
    <!--<el-button @click="xianqin()">dome</el-button>-->
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
          <el-button type="text" size="small" @click="xianqin(scope.row)">详情</el-button>
          <el-button type="text" size="small" v-show="scope.row.orderStatus===0" @click="quxiao(scope.row)">取消</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">

      <el-table
        :data="tableData3"
        border
        style="width: 300px;margin: 0 0 30px 0">
        <el-table-column
          prop="orderId"
          label="订单ID">
        </el-table-column>
        <el-table-column
          prop="orderAmount"
          label="订单总金额">
        </el-table-column>
      </el-table>

      <el-table
        :data="tableData4"
        border
        style="width: 700px">
        <el-table-column
          prop="date"
          label="商品ID">
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品名称">
        </el-table-column>
        <el-table-column
          prop="name"
          label="价格">
        </el-table-column>
        <el-table-column
          prop="name"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="name"
          label="总额">
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
    <el-button type="danger" @click="quxiao()">取消订单</el-button>
    <el-button type="primary" @click="wanjie()">完结订单</el-button>
  </span>
    </el-dialog>

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
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {ElButton},
    data(){
      return {
        dialogVisible: false,
        tableData2: [],
        tableData3: [],
        tableData4: [],
        total: 0,
        page: 1,
        size: 5,
      }
    },
    mounted(){
      this.xianshi();
    },
    methods: {
      xianshi: function () {
        this.$ajax.get('http://10.128.4.164:8080/seller/order/list?page=' + this.page + '&size=' + this.size)
          .then((response) => {
            console.log(response.data.orderDTOPage.totalElements);
            this.tableData2 = response.data.orderDTOPage.content;
            this.total = response.data.orderDTOPage.totalElements;
          })
      },
      handleCurrentChange(val) {
        this.page = val;
        this.xianshi();
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },

      xianqin(row){

        this.tableData3 = row;
        this.$ajax.get('http://10.128.4.164:8080/seller/order/detail?orderId=' + row.orderId)
          .then((response) => {
            this.tableData4 = response.orderDetailList;
          });
        this.dialogVisible = true;
      },
      wanjie(){
        let a = this.tableData3.orderId;

        this.$ajax.get('http://10.128.4.164:8080/seller/order/finish?orderId=' + a)
          .then((response) => {
            this.$notify({
              title: '成功',
              type: 'success'
            });
          });
        this.dialogVisible = false;
      },

    quxiao(row){
      this.$ajax.get('http://10.128.4.164:8080/seller/order/cancel?orderId=' + row.orderId)
        .then((response) => {
          this.$notify({
            title: '成功',
            type: 'success'
          });
          this.dialogVisible = false;
          this.xianshi();
        })

     }

    }

  }
</script>
<style lang="less" scoped>

</style>
