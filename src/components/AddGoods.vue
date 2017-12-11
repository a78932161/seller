<template>

  <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="价格">
      <el-input v-model="formLabelAlign.price"></el-input>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model="formLabelAlign.stock"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="formLabelAlign.describe"></el-input>
    </el-form-item>
    <el-form-item label="介绍">7
      <el-input v-model="formLabelAlign.introduce" :rows="2" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="图片">
      <el-input v-model="formLabelAlign.img"></el-input>
    </el-form-item>
    <el-form-item label="类目">
      <el-select v-model="formLabelAlign.category" placeholder="请选类目" style="width: 100%">
        <el-option v-for="cat in categoryList"  :label="cat.categoryName" :value="cat.categoryName"></el-option>
      </el-select>
    </el-form-item>

    <div style="text-align: center">
      <el-button type="primary" @click="tijiao()">提交</el-button>
    </div>


  </el-form>
</template>

<script>
  export default {

    data () {
      return {
        labelPosition: 'top',
        categoryList:[],
        formLabelAlign: {
          name: '',
          price: '',
          stock: '',
          describe:'',
          introduce:'',
          img:'',
          category:'',
        }
      }
    },
    mounted(){
      this.xianshi();
    },
    methods:{
        xianshi(){
          this.$ajax.get('http://10.128.4.164:8080/seller/product/index?productId=123456')
            .then((response) =>{
              console.log(response.data);
              this.categoryList=response.data.categoryList;
            })

        },
      tijiao(){

      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
