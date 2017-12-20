<template>

  <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
    <el-form-item label="名字">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="type">
      <el-input v-model="formLabelAlign.price"></el-input>
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
        xzcategory:'',
        formLabelAlign: {
          name: '',
          type: '',

        }
      }
    },
    mounted(){
      this.xianshi();
    },
    methods:{
      xianshi(){



      },
      tijiao(){

      },

    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
