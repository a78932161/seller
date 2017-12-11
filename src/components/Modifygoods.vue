<template>

  <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.productName"></el-input>
    </el-form-item>
    <el-form-item label="价格">
      <el-input v-model="formLabelAlign.productPrice"></el-input>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model="formLabelAlign.productStock"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="formLabelAlign.productDescribe"></el-input>
    </el-form-item>
    <el-form-item label="介绍">
      <el-input v-model="formLabelAlign.productStatus" :rows="2" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="图片">
      <img width="300" height="250" style="background: green">
      <el-input v-model="formLabelAlign.productIcon"></el-input>
    </el-form-item>
    <el-form-item label="类目">
      <el-select v-model="formLabelAlign.productType" style="width: 100%">
        <el-option label="区域一" value="shanghai"></el-option>
      </el-select>
    </el-form-item>
    <div style="text-align: center">
      <el-button type="primary" style="">提交</el-button>
    </div>


  </el-form>
</template>

<script>
  export default {

    data () {
      return {
        labelPosition: 'top',
        formLabelAlign: {}
      }
    },
    created(){
        this.formLabelAlign= this.$route.params;

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
