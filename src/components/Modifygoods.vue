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
      <el-input v-model="formLabelAlign.productDescription"></el-input>
    </el-form-item>
    <el-form-item label="介绍">
      <el-input v-model="formLabelAlign.productStatus" :rows="2" type="textarea"></el-input>
    </el-form-item>
    <el-form-item label="图片">
      <img width="300" height="250">
      <el-input v-model="formLabelAlign.productIcon"></el-input>
    </el-form-item>
    <el-form-item label="类目">
      <el-select v-model="formLabelAlign.categoryType"  style="width: 100%" @change="changeValue">
        <el-option
          v-for="item in category"
          :key="item.categoryType"
          :value="item.categoryType"
          :label="item.categoryName">
        </el-option>
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
        formLabelAlign: [],
        goodsid:'',
        category:[],
        xzcategory:'',
      }
    },
    methods:{
        xianshi(){
          this.goodsid= this.$route.params;
          this.$ajax.get('http://10.128.4.164:8080/seller/product/index?productId='+this.goodsid)
            .then((response) =>{
              this.formLabelAlign=response.productInfo;
              this.category=response.categoryList;
            })
        },
        tijiao(){
          this.$ajax.get('http://10.128.4.164:8080/seller/product/sava',
            {
                params:{
                  productid:this.goodsid,
                  productName:this.formLabelAlign.productName,
                  productPrice:this.formLabelAlign.productPrice,
                  productStock:this.formLabelAlign.productStock,
                  productDescription:this.formLabelAlign.productDescription,
                  productIcon:this.formLabelAlign.productIcon,
                  categoryType:this.xzcategory,
                }
            })
            .then((response) =>{
              this.$notify({
                title: '提交成功',
                type: 'success'
              });
            })

        },
      changeValue(value){
        console.log(value);
        this.xzcategory=value;
        let obj = {};
        obj = this.options.find((item)=>{
          return item.value === value;
        });
        console.log(obj.label);
      }

    },

    mounted(){
      this.xianshi();
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
