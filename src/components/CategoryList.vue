<template>
  <div>

    <el-table
      :data="tableData1"
      border
      style="width: 100%">
      <el-table-column
        prop="productId"
        label="类目id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="productName"
        label="名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="productIcon"
        label=type>
      </el-table-column>
      <el-table-column
        prop="productPrice"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="productStock"
        label="修改时间">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="xiugai(scope.row)">修改</el-button>
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
  export default{
      data(){
          return{
            tableData1:[],


          }
      },
    methods:{
      xiugai(row){
        this.$router.push({ name: 'modifycategory'})

      }

    }
  }
</script>

<style>

</style>
